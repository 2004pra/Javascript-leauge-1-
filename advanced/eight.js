// what is async await 

// async await is a way to handle promises in a more readable way.

//using async await we can provide sunchronus behaviour to the code 
//when we mark a async code await then it will run that code first and then it will run and go to the next state code 
//async function always return a promise 

// async function getData(){
// setTimeout(function(){
//           console.log("i am inside set timeout block");
//       },3000);
// }

//  let output = getData();


//await->?

//lets understand fetch api first so it will get easier to understand the await 

//types of request in fetch api
//get-> to get the data from the server

//post -> to send the data to the server

//put -> to update the data on the server

//delete -> to delete the data from the server


//first get request -> async
// async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//    console.log (response); 
//    //parse json data 

//    let data =  await response.json();
//    console.log(data);
// }
// getData();

//scenario -->
// prepare url / api endpint   -> sync 
// fetch data --> network call -> async
// process data --> sync
//lets say we want to get data but it can take a few seconds and you are already on the next step 
//when you are processing but what will you process if there os not data fetched yet \


//that means we have to put a condition  that first recieve the data then process it 
//await is just like a relay race in olympics


//post request 
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options ={
    method: "POST",
    body: JSON.stringify({ username: "love babbar" }),
    headers: myHeaders,
  };
async function getData(){
    const url = "https://dummyjson.com/posts";

    const response = await fetch(url);
    let data = await response.json();
    console.log('get data response',data);
}
  async function postData(){
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Love babbar -> I am in love with someone.',
          userId: 5,
          /* other post data */
        })
      })
      
    let data = await response.json();
    console.log('post data response',data);
  }
async function processData(){
      await postData();
        await getData();
}
processData();



 