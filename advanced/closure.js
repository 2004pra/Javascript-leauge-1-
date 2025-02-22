//what is closure 
//when you bind the data with the function and the function is returning the data

//to have a closure we need to create a function 
//for example a function bundeled with required data like value of the name varibale 



function outer() {
    let name = "Mozilla"; //  let is blocked scope variable
    function innerFunction() {
      // displayName() is the inner function, that forms a closure
      let name = "love";
      console.log(name); // use variable declared in the parent function
    }
    innerFunction();
  }
  outer();
 