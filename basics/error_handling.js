//what is an error?
//error is a mistake in the code that stops the code from running

// for example you have a 10 line program and the 5th line is having a mistake because of xyz reason asssume it is not able to find the variable or the function so it will stop the code from running and will give you an error

//there are two type of error in javascript
//1 syntax error
//2 runtime error->> while executing the code
//3 compile time error --before executing

//handling error in javascript
// the handling of a error is the most important part of web development while you are working in a company 

//try catch block
//try catch block is used to handle the error in javascript
// lets say we have a code

// try{
// // in this block you write the code which can have the error 
// console.log("try block starts here");
// //refrence error
// console.log(x);
// console.log("try block ends here");


// }
// catch(err){ // the e is name of error we have named it here 

// //here we define what we need to do with the error 
// //here we can write 
// //retry logic
// //fallback mechanism 
// //logging
// //custom error 
// console.log("catch block starts here");
// console.log("your error is here",err);

// }
// finally{
//     console.log("i will run evrytime becaus i am  finally block ")
// }
// console.log(c);

// using throw keyword we can create our own custom error 

try{
    //refence error
    console.log(x);

}
catch(err){
    //throwing the error
    throw new Error("bhai pehle declare karo phir print karna ");
}
