let paraelement = document.getElementById("fpara2");
//to chage its style 
paraelement.style.backgroundColor = "red";
//drawback you cannot handle multiple things here

//so we have another utility 
// which is style.cssText

let second = document.getElementById("seconddiv");
second.style.cssText = "background-color:blue;  padding:11rem;"

// one more method -- it overwrites the whole style thing
// set attribute --> it can change the value of any attribute like class , style there value can be rewrite
let first = document.querySelector("#firstdiv");
first.setAttribute("class","divclass");
first.setAttribute("class","seconddivclass");
first.setAttribute("style","background-color:black; padding:5rem;");

//class name 
//it helps in getting classes and can insert multiple classes 
let fpara = document.getElementById("fpara1");
fpara.className = "goku vegeta";

//classList
//it is a read only property
// it is used to get in array format 
// can add class,removeEventListener,toggele,contains

let spara= document.querySelector("#fpara2");

spara.classList.add("vegeta");
spara.classList.toggle("goku");
spara.classList.contains("vegeta");