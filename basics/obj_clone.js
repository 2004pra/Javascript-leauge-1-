let obj = {
    age:12,
    wt:60,
    ht:180
};
console.log(obj.age);
//why object is called dynamic in javascript

// its properties can be added or removed at run time
obj.color="white";
console.log(obj.color);

//how object cloning works
//in cloning we have to create a different obj of you use the same object that means its pointing to the same reference
let obj2 = {...obj}; //this method of cloning is called spread operator
obj.age=90;
console.log("obj :",obj);
console.log("obj2 :",obj2);
//if we use the spread operator then it will create a deep copy of the object

//what if we use the other method 
obj2=obj;
obj.age=100;
console.log("obj :",obj);
console.log("obj2 :",obj2);
//this will create a shallow copy of the object  so they will have the same age 

//assign method  to clone the object
let obj3 = Object.assign({},obj);
obj.age=120;
console.log("obj :",obj);
console.log("obj3 :",obj3);


// concept of garbage collection
// it is a process of automatically deleting the unused memory
// it is a process of automatically deleting the unreferenced memory
// it is a process of automatically deleting the unaccessible memory


//we dont have any control over the garbage collection
//it works in background 