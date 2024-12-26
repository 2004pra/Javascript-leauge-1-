// strings 
// what is string --> string is a sequence of characters
// how to create string --> using single quotes, double quotes, backticks
// single quotes
// let str = 'hello';
// console.log(str);
//
// double quotes
// let str1 = "hello";
// console.log(str1);
//
// backticks
// let str2 = `hello`;
// console.log(str2);
//using typeof operator
// console.log(typeof str);
// console.log(typeof str1);
// console.log(typeof str2);
// strings cannot be shifted to the next line
// let str3 = 'hello
// world';
// console.log(str3);
// let str4 = `hello
// world`;
// console.log(str4);
// but can be shifted using backticks
let str5 = `hello
world`;
console.log(str5);


//using new keyword
let str6 = new String('hello');
console.log(str6);
 console.log(typeof str6); // --> whats specical about this string is that it is an object


 console.log("  ");

//string operations
//1. concatenation
let str7 = 'hello';
let str8 = 'world';
// with using backticks
// to access the variables we use ${}
let str9 = `${str7}${str8}`;
console.log(str9);
//2. string length
let str10 = 'hello';
console.log(str10.length);
//3. accessing characters
let str11 = 'hello';
console.log(str11[0]);
console.log(str11[1]);
console.log(str11[2]);
console.log(str11[3]);
console.log(str11[4]);

console.log("  ");
//4. string methods

console.log("uppercase and lowercase");

//a. toUpperCase()

let str12 = 'hello';
console.log(str12.toUpperCase());
//b. toLowerCase()
let str13 = 'HELLO';
console.log(str13.toLowerCase());

console.log("  ");

console.log("substring");

//c. substring()
let str14 = 'hello';
console.log(str14.substring(1, 4)); 
//syntax explaination ---> substring(starting index, ending index)
//starting index is inclusive and ending index is exclusive
//another way 
console.log(str14.substring(1));
//it will print from index 1 to end

console.log("  ");

console.log("split");

//d. split()
let str15 = 'hello world';
console.log(str15.split(' '));
//syntax explaination ---> split('character')
//it will split the string based on the character and return an array
//if we don't pass any character it will split the string based on each character
console.log(str15.split(''));

// to write quotes in string you can use backslash
// backslash is used to so compiler can treat the quotes as a string just a normal character
let str16 = 'hello \'world\'';
console.log(str16);

console.log("  ");

// string join
let str17 = ['hello', 'world'];

console.log(str17.join(','));//you can use any character like comma or space or hyphe
//syntax explaination ---> join('character')
//it will join the array elements based on the character
//if we don't pass any character it will join the array elements based on each character

console.log("  ");


