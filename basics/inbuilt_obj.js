
console.log("hello world");

// math is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.
console.log(Math.PI);

console.log(Math.max(60,70,30));
console.log(Math.min(60,70,30));

//rounf of
console.log(Math.round(4.7));
console.log(Math.round(4.4));

//floor
// it print the just less than the number
console.log(Math.floor(4.7));
console.log(Math.floor(4.4));

//ceil
// it print the just greater than the number
console.log(Math.ceil(4.7));
console.log(Math.ceil(4.4));

//absolute value
//it makes the number positive

console.log(Math.abs(-4.7));
console.log(Math.abs(4.4));


//2 date object
// The Date object is used to work with dates and times.

// Date objects are created with new Date().

let curr = new Date();//current date and time is printed 
console.log(curr);
console.log(new Date());

let newDate = new Date(2021, 0, 1, 12, 0, 0, 0);//year,month,day,hour,minute,second,millisecond  months have 0 based indexing 

console.log(newDate);

console.log(newDate.getDay());//it will print the day of the week

















