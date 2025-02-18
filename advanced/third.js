//browser events
     //--> events--> click,scroll,double,keypress
         //--> respond
             //--> data stored
                //--> stop
                   //-->lifecycle


//we can find what type of events are happening in website by writing
//monitorEvents(document);
// and then you have to just click on website anywhere do some actions


// what is event target 
//it is a type of entity which recieve events and it is the one who is responsible for the event
 //that particular location is called eventlistener so we can define what type of  followup action should be done when came to target 
  // so you can add event listner on a button that whats gonna happen when we click on it 
//   syntax :  <event target  >.addEventListener(<event type>,<fucntion-->action>


// let fpara= document.querySelector("#fpara");
// fpara.textContent = "hello world";

// function changeText(){
//     let fpara= document.querySelector("#fpara");
// fpara.textContent = "hello world";
// }
// let fpara= document.querySelector("#fpara");

// fpara.addEventListener("click",changeText);

//to remove just replace add with remove

//PHASES OF AN  EVENT 
//1. CAPTURING PHASE--> it is the first phase of event where the event is captured for example at the time of click the event is on div then it will go to the parent div and then to the parent div
//2. TARGET PHASE--> it is the second phase of event where the event is on the target element
//3. BUBBLING PHASE--> it is the third phase of event where the event is bubbled up to the parent element

//addevent listner by default apply on bubbling phase if you want to apply on capturing phase then you have to write true as third parameter
//syntax: <event target>.addEventListener(<event type>,<fucntion-->action>,true)  cant apply in target phase 


//event object -->  when an event triggger it goes to add event listner as a parameter 

//how
// let fpara= document.querySelector("#fpara");
// function changeText(event){
//     console.log(event);
//     let fpara= document.querySelector("#fpara");
// fpara.textContent = "hello world";
// }
// let fpara= document.querySelector("#fpara");

// fpara.addEventListener("click",changeText);

// lets try to change the default action of anchor tage 

let anchor=document.querySelector("#fanchor");
anchor.addEventListener("click",function(event){
    event.preventDefault(); // to stop the default action of anchor tag
    anchor.textContent = "click done by";
})