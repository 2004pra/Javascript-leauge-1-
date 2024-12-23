// let m=10+3;
// console.log(m);


// operators
// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical operators
// 5. Bitwise operators
// 6. Ternary operators
// 7. Typeof operator


// 1. Arithmetic operators
console.log("Arithmetic operators");
let x = 10;
let y = 3;
console.log("addition", x + y);
console.log("subtraction", x - y);
console.log("multiplication", x * y);
console.log("division", x / y);
console.log("remainder", x % y);

// pre increment--> means first increment then use
console.log("pre increment", ++x);
// post increment--> means first use then increment
console.log("post increment", x++);

// pre decrement--> means first decrement then use
console.log("pre decrement", --x);
// post decrement--> means first use then decrement
console.log("post decrement", x--);

console.log(x ** y); // x to the power of y

// 2. Assignment operators
console.log("Assignment operators");
let a = 10;
a += 3; // a = a + 3 means a = 10 + 3
// both are same there is no difference
console.log(a);

// 3. Comparison operators
console.log("Comparison operators");
let b = 1;
// relational
console.log(b > 0);
console.log(b >= 0);
console.log(b < 0);
console.log(b <= 0);
console.log(b == 1);// if we had use string value equals to 5 it should be giving true   thats why to compare both typenof data we use ===  strict equality
console.log(b === 1);  //--> it will check the value and type of the variable --> strict equality
console.log(b != 1);
console.log(b !== 1);

//4 . ternary operators
// for example your age is greater than 18 then you can vote otherwise you can't vote
console.log("Ternary operators");
let age = 18;
let vote = age > 18 ? "you can vote" : "you can't vote";
console.log(vote);

// ? is a ternary operator

// 5. Logical operators
console.log("Logical operators");
// logical AND (&&)
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// logical OR (||)
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// logical NOT (!)
console.log(!true);
console.log(!false);

// falsy and truthy values
// falsy values: undefined, null, 0, false, '', NaN
// truthy values: anything that is not falsy

// example
let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor; 
console.log(currentColor);

// short-circuiting
// if the first value is true then it will not check the second value
console.log(false || "prashant");
console.log(false || 1);
console.log(false || 1 || 2);
console.log(false || 1 || 2 || 3);


// 6. Bitwise operators
console.log("Bitwise operators");
// bitwise AND (&)
console.log(1 & 2); // 01 & 10 = 00

// bitwise OR (|)
console.log(1 | 2); // 01 | 10 = 11

// bitwise XOR (^)  same value gives 0 and different value gives 1
console.log(1 ^ 2); // 01 ^ 10 = 11

// bitwise NOT (~)
console.log(~1); // -(1+1) = -2

// left shift (<<)
//what it actually does is it shifts the bits to the left by the number of positions you specify
console.log(1 << 2); // 01 << 2 = 100

// right shift (>>)  in this last bit gets lost  
console.log(1 >> 2); // 01 >> 2 = 000