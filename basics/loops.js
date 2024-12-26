// loops
// lets understant what loops are and how they work

// loops are used to repeat a block of code multiple times
// as you know we can write console.log multiple times to print 1 to 10
// but it makes our code lengthy and not efficient
// so we use loops to do this task
// there are three types of loops in javascript
// 1. for loop
// 2. while loop
// 3. do-while loop

// 1. for loop
// for loop is used to repeat a block of code multiple times
// for loop has three parts
// 1. initialization
// 2. condition
// 3. increment/decrement
// syntax of for loop
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }
// lets print 1 to 10 using for loop
for (let i = 1; i <= 10; i++) {
    console.log("prashant");
}

//for counting 
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("reverse counting");
//reverse counting
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//break statement

// how break works in loops--> break statement is used to break the loop 
// the term iteration is used to repeat the loop
// when the condition is true the loop will iterate
// when the condition is false the loop will break
// but we can use break statement to break the loop in between
// using some condition
console.log("   ");
console.log("break statement");
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

console.log("   ");
console.log("continue statement");
//continue statement
// how continue works in loops--> continue statement is used to skip the iteration
// the term iteration is used to repeat the loop
// when the condition is true the loop will iterate
// when the condition is false the loop will break

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}
// here we skip the iteration when i==5
// so 5 will not be printed

// 2. while loop
// while loop is used to repeat a block of code multiple times
// while loop has only one part
// 1. condition
// syntax of while loop
// while (condition) {
//     // code to be executed
// }
// lets print 1 to 10 using while loop
console.log("   ");
console.log("while loop");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// difference between for and while loop
// for loop is used when we know the number of iterations
// while loop is used when we don't know the number of iterations
// you can also use the break and continue statement in while loop
// the same way we used in for loop

// 3. do-while loop
// do-while loop is used to repeat a block of code multiple times
// do-while loop has only one part
// 1. condition
// syntax of do-while loop
// do {
//     // code to be executed
// } while (condition);
// lets print 1 to 10 using do-while loop
console.log("   ");
console.log("do-while loop");
let j = 1;
do {
    console.log(j);
    j++;
}
while (j <= 10);
// difference between while and do-while loop