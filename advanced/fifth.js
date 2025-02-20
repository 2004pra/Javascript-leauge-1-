//learn how performance improvement work ---> 
// some questions that mmight arise 
// how to measure it 
// code 1
//  const t1 = performance.now();
// for (let i =0;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para " + i ;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();

// console.log("time taken to run the code "+ (t2-t1));

// //lets see how to measure the performance 
// //there is a standard way on how muchh time the code is taking  to run 
// // we call it performance.now( ) method


// //code 2

// const t3 = performance.now();
// let mydiv = document.createElement("div");
//  for (let i=1;i<=100;i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para " + i ;
//     mydiv.appendChild(para);
//  }
//  document.body.appendChild(mydiv);

//  const t4 = performance.now();
//  console.log("time taken to run the code " + (t4-t3));


//

// what is reflow
// process of calculating  position   , dimension of element 
//its a intensive task 

//what is repaint 

// it is the process of displaying the content we have 
// it is less intensive than reflow

// in code 1 we have to  reflow and repaint 100 times
// but in  code 2 we have done the reflow 

// reflow didnt occur when we did append the content in div 
// but when we append the div in body then reflow occurs
// so thats why it takes less time to run than the other one 






//what is document fragment 
//it is just like document object when we do the addition in this element it does not do anything like reflow or repaint so
//it works faster that the  but that dosent mean  it dont have a single reflow and reapaint it has beacuse atleast one time you re doint it in the document so it will atleast contain one reflow and repaint 


//best code 

let fragment = document.createDocumentFragment();
for (let i =0;i<=100;i++){
           let para = document.createElement('p');
              para .textContent = "this is para " + i+100 ;
              fragment.appendChild(para);
}
//the below line takes one reflow and one repaint 
document.body.appendChild(fragment);
   
