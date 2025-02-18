
// let myDiv = document.querySelector("#mydiv");
// let newElement = document.createElement("span");
// newElement.textContent = "main aa gaya";
// myDiv.insertAdjacentElement("afterbegin", newElement);


//that is how we go into particular div and then create a new element like span 
// and then we add text and place it using apppend or insert 

//how to do removal 

//we have a method called remove_child
//here we have to tell in which parent we are going to remove so we can say parent.remove_child(child)
let parent = document.querySelector("#mydiv");
let child = document.querySelector("#child");
parent.removeChild(child);



