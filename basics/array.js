//array
//what is reference type in javascript?
//reference type is a type of data that refers to a memory location
//reference type is used to store complex data types
//reference type is used to store the address of the memory location
//reference type is used to store the object
//reference type is used to store the array
//reference type is used to store the function
//reference type is used to store the class
//reference type is used to store the interface

// there are two types of memory stacka and heap
// stack is used to store the primitive data types
// heap is used to store the reference data types

// what is an array?
// an array is a collection of elements
// an array is a collection of values

//what is object?
// an object is a collection of key-value pairs
// an object is a collection of properties



// how to declare an array?
// syntax of array
// let arrayName = [value1, value2, value3, value4];
//example
let array = [1, 2, 3, 4];

// object declaration
let object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3'};
    //for example key is the name and value is the prashant
    console.log(object.key1);
    //if there is space always use double inverted commas for key

    // example of object
    let person = {
        name: 'prashant',
        age: 23,
        city: 'mumbai',
        country: 'india',
        greet : function(){
            console.log('hello');
        }
    };
    console.log(person);
    person.greet();

    console.log(typeof(person));

    let obj2=person;
    console.log(obj2);
    //it creates a shallow copy of the object
    //it will not create a deep copy of the object
    //it will create a reference of the object
    //it will not create a copy of the object

    // lets say person name reference is stored in stack and the actual object is in heap memory 
    //then we craeted a new refrence obj2 but not the new object so it will point to the same object which is stored in heap memory 

    //array main part 

    // array is like a list can store any items like function,number,string,boolean,object almost every type of primitive and non primitive items


    // creating an array
    let arr = [1, 2, 3, 4, 5];
    console.log(arr);

    //using array constructor
    
    let arr1 = new Array("love", 2, 3, true);
    console.log(arr1);

    console.log(typeof(arr));
    console.log(typeof(arr1));

    //array visualisation
    // 1. using index
    // index starts from 0
    // index is used to access the elements of the array
    // index is used to access the elements of the string

    // lets say we have an array of 5 elements
    // index starts from 0
    // index ends at 4
    // index is used to access the elements of the array
    // index is used to access the elements of the string
    // index is used to access the elements of the object
    // index is used to access the elements of the class
    

    //lets access the elements of the array
    let arr2 = [1, 2, 3, 4, 5];
    console.log(arr2[0]);
    console.log(arr2[1]);

    ///built in methods of array 
    //1. push--> insert at end
    //2. pop--> remove 
    //3. shift--> remove from start
    //4. unshift--> insert at start
    //5. splice--> you can change the content of the array by removing or replacing the elements
    //6. slice-->used to provide a range of elements and exclude the last index element 
    //7. indexOf
    //8. lastIndexOf
    //9. includes
    //10. concat
    //11. join
    //12. reverse
    //13. map
    //14. filter
    //15. reduce
    //16. sort

     
arr1.push("babbar");
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift("prashant");
console.log(arr1);
arr1.push(20);
arr1.push(30);
console.log(arr1);
arr1.slice(2,4);
console.log(arr1);
// arr1.splice(1,2,'bora');
// console.log(arr1);