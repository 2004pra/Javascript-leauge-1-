document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search_btn");
  const usernameInput = document.getElementById("user_input");
  const statsContainer = document.querySelector(".stats_container");
  const easyProgressCircle = document.querySelector(".easy_progress");
  const mediumProgressCircle = document.querySelector(".medium_progress");
  const hardProgressCircle = document.querySelector(".hard_progress");
  const easyLabel = document.getElementById("easy_label");
  const mediumLabel = document.getElementById("medium_label");
  const hardLabel = document.getElementById("hard_label");
  const cardStatsContainer = document.querySelector(".stats-card");

  function validateUsername(username) {
    if (username.trim() === "") {
      alert("username should not be empty");
      return false;
    }
    const regex = /^[a-zA-Z0-9_-]{1,20}$/;

    const isMatching = regex.test(username);
    if (!isMatching) {
      console.log("regex match result:", isMatching);
      alert("invalid username");
    }
    return isMatching;
  }

  async function fetchUserDetails(username) {


    try {
   const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

      searchButton.textContent = "Searching...";
      searchButton.disabled = true;
      statsContainer.classList.add("loading");
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("user not found");
      }
      const data = await response.json();
      console.log("loggging data", data);



       displayUserstats(data);
    } catch (error) {
      statsContainer.innerHTML = `<p>${error.message}</p>`
    } finally {
      searchButton.textContent = "Search";
      searchButton.disabled = false;
    }
  }

   function  updateProgress(solved,total,label,circle){
         const progressDegree = (solved/total)*100;
         console.log(`Updating progress: solved=${solved}, total=${total}, progressDegree=${progressDegree}`);
         circle.style.setProperty("--progress-degree",`${progressDegree}%`);
            label.textContent = `${solved}/${total}`;
   }

  function displayUserstats(data) {
    const totalques = data.totalQuestions;
    const totaleasy = data.totalEasy;
    const totalmedium = data.totalMedium;
    const totalhard = data.totalHard;

    const solvedtotal = data.totalSolved;
    const solvedtotaleasy = data.easySolved;
    const solvedtotalmedium = data.mediumSolved;
    const solvedtotalhard = data.hardSolved;

        updateProgress(solvedtotaleasy,totaleasy,easyLabel,easyProgressCircle);
        updateProgress(solvedtotalmedium,totalmedium,mediumLabel,mediumProgressCircle);
        updateProgress(solvedtotalhard,totalhard,hardLabel,hardProgressCircle);

    

    const cardsData = [
        {label : "Overall Contribution", value: data.contributionPoints},
        {label : "Rank", value: data.ranking},
        {label : "Reputation", value: data.reputation},
        {label : "Acceptance Rate", value: data.acceptanceRate}
        
    ];
    console.log("card ka Data :",cardsData);

      cardStatsContainer.innerHTML = cardsData.map(
        data =>{
            return `
            <div class="card">
            <h4>${data.label}</h4>
            <p>${data.value}</p>
            </div>
        `
        }
      ) .join("");

  }    
  

  searchButton.addEventListener("click", function () {
    const username = usernameInput.value;
    console.log("login username", username);
    if (validateUsername(username)) {
      fetchUserDetails(username);
    }
  });
  this.body.addEventListener("keyup", function () {
    const username = usernameInput.value;
    console.log("login username", username);
    if (validateUsername(username)) {
      fetchUserDetails(username);
    }
  });
});
