// what is promise 
// to check the state of the asynch code and handle the returning value 
// this helps returning the value of asynch code in same way as synchro. code 
// it has two state  --> resolve and reject
// we should always write the asynch code in promise forn effecient way 

//   let  firstpromise = new Promise(( resolve,reject)=>{
//     console.log("babbar");
//     // resolve(1001);  // we have to mark resolve if its in fulfil state 
//     // reject(new Error("internal server error "));
    
    

//   });
let promise = new Promise((resolve,reject)=>{
    setTimeout(function sayMyName(){
        console.log("my name is love babbar ");
          },15000);
          resolve(1);
});


//learn on your own like then,catch use in promise   then and catch are some of the built in function s

// we can use promise.all to handle multiple promise at once  here a new promise is created which gets marked as resolve when all the inner 
// promise are resolved

 

