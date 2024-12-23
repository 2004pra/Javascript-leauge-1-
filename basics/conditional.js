// types of conditional statements
// 1. if
// 2. if-else
// 3. if-else if-else
// 4. switch-case

// 1. if
// if (condition) {
//     // code to be executed
// }
let age = 18;
if (age > 18) {
    console.log("you can vote");
}


// 2. if-else
// if (condition) {
//     // code to be executed
// } else {
//     // code to be executed
// }
let age1 = 18;
if (age1 > 18) {
    console.log("you can vote");
}


// 3. if-else if-else
// if (condition) {
//     // code to be executed
// } else if (condition) {
//     // code to be executed
// } else {
//     // code to be executed
// }
let age2 = 18;
if (age2 > 18) {
    console.log("you can vote");
}
else if (age2 < 18) {
    console.log("you can't vote");
}
else {
    console.log("you can vote");
}


// 4. switch-case
// switch (expression) {
//     case value1:
//         // code to be executed
//         break;
//     case value2:
//         // code to be executed
//         break;
//     default:
//         // code to be executed

// }
let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("kharab din hai  tumhara ");
        break;
}
