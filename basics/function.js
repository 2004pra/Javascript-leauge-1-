// what is a fucntion?
// A function is a block of code that can be called and executed
// A function can have parameters and return a value


// A function can be called multiple times
// A function can be defined using the function keyword
// A function can be defined using the arrow function
// A function can be defined using the function constructor
// A function can be defined using the new keyword
// A function can be defined using the class keyword
// A function can be defined using the async keyword
// A function can be defined using the generator function
// A function can be defined using the nested function
// A function can be defined using the anonymous function
// A function can be defined using the IIFE
// A function can be defined using the callback function

// syntax of function


// function functionName() {
//     // code to be executed
// }
// lets define a function that prints hello world and you can pass the parameters in brackets

function helloWorld() {
    console.log("hello world");
}
helloWorld();

// doing via parameters
function average(num1,num2) {

    let avg = (num1 + num2) / 2;
    console.log(avg);
}
average(2,4);

//return fucntion
//explaination of return function
// return statement is used to return the value from the function
// return statement is used to stop the execution of the function
// when we use return we need to store the value in a variable so thats how it is done as you can see in the below example 

function getsum(num1,num2) {

    let sum = num1 + num2;
    return sum;
    //whatever is written after return will not be executed
}
let result = getsum(2,4);
  
// declaring in a variable 
const getsum1 = function(num1,num2) {
    return num1+num2;
}
let result1 = getsum1(2,4);
console.log(result1);

//arrow function--> in todays world arrow function is used more than the normal function
// so please try to use arrow function more in your code
// syntax of arrow function
// const functionName = (parameters) => {
//     // code to be executed
// }
// lets define the above function using arrow function
const getsum2 = (num1,num2) => {
    return num1+num2;
}