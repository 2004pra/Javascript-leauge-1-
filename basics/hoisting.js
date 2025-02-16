//hoisting is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution.
{
    saymyname("babbar");
function saymyname(name) {
    console.log(name);
}
}
// we know that the line Node.3 dosent have any reference above to find the function but when we put it in a curly braces it gets bounded  and able to find the function in thst particular area and it will print the output as babbar
//this process is called function hoisting


//variable hosting 
console.log(age);
var age= 25;
//this will print undefined as the variable is declared after the console.log and it is not hoisted to the top
// so we need to hoist it in curly braces 
// thats why undefined is printed 
//because the scope provoided makes it easier to find the variable and it will print the output as 25


// what if we have declared the varibale using let or const keyword
console.log(age);//--> should we written always after varibale declaration
let marks = 25;
//this will give us an error as the let and const keyword are not hoisted to the top
// same for the const 
// to write a better code always use let 

// function expression error explained 
//lets say 

sayHello();
let sayHello = function() {
    console.log("hello");
}
// before getting created the fucntion is called 
//refernce error will be printed


//class hoisting
//if you dont know what a class is it is a blue print which has its properties like age,name,funtion
  // a instance of a class is called object


//   class human{

//   }
//   const object1=new human();
  //what is i delclare this object before craeating the class
    //it will give me a reference error
    
        const object1=new human();
    class human{
        function (hello){
         console.log("hello");
    }
    }



    // so now we know it only works with function declaration and not with function expression   
    // only usbable with var keyword

    

    // * funtion call stack 
    

    // lets understand what stack is 

    // its a data container  --> it follows the LIFO principle

    // last in first out
    // the last element that is added to the stack will be the first one to be removed
    //lets say you have a file where you have 4 funtions and at last the 4th function is called , so evertime a function is called we create a entry in stack
    //and every function is called and all are entered in stack
     // if the last fucntion is executed then it will be removed from the stack and the 3rd function will be executed 
    //  and thats how every entry  will be removed



    //why function are called first class cuizens in javascript

    //different uses of fucntion 
    //1. it can be assigned to a variable
    // 2. it can be passed as an argument to a function
    // 3. it can be returned by a function
    // 4. it can be stored in a data structure like an object
    // 5. it can be assigned to a property of an object

    // because of these thing it is called first class cuizens in javascript

    //use 1 
 let great = function(){
    console.log("hello");
}
greet();

//use 2 

function greetme(greet,fullName){
    console.log("hello", + fullName);
    greet();
}
greetme(greet,"prashant");

//use 3
function greetme(greet,fullName){
    console.log("hello", + fullName);
    greet();
    return greet;
}

// use 4
const arr = {
    function(a,b){
        return a+b;
    }
};
let first = arr[0];
let ans= first(5,10);
console.log(ans);


// use 5
const obj = {
    age:25,
    name:"prashant",
    greet:"hello",
    function(){
        console.log("hello duniya");
    }
};
console.log(obj.greet);

 

  