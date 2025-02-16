// varibale scoping
// scoping
// it has three types--> globalThis,function,block 
//1 global scope --> where we can access the vriable if created globally
//2 function scope --> where we can access the variable if created inside the function
//3 block scope --> where we can access the variable if created inside the block



//1 global scope
var age=15;
// this is called global scope because it is not created in any function or block its directly created in file and accessible in file whole 
// but its gives problem as global hard to debugg 


console.log(age);
// it works everywhere like if conditon  , for loop , in a function 
// same case  if used let and const 

//2 function scope
function sayhello(){
    var name="prashant";
    console.log("hello world");
}
sayhello();
console.log(name);//this will give error because name is not defined outside the function
// it is only accessible inside the function 
//same behaviour with let and const

//3 block scope

{
    var height=5;
}
console.log(height); // this will print the output easily 
// but if we write print command before declaration it will give error but still print output because of varibale hoisting 

// if we use let and const it will give error because let and const are block scoped
// let and const will only be accessed inside the block 


// important topic --> temporal dead zone 
//understand by example -->

console.log(marks);
console.log("prashant");
console.log("hello");
let marks=100;
// this will give error because let and const are not hoisted to the top
// so we can say there is temporal dead zone from line 45 to 47





