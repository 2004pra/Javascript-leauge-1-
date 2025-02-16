//classe s

// class is like a box 
// it hs 3 things lile StaticRange/properties  and behavoiur/functionality
// properties are like age,name,city
// behaviour is like walking, talking, eating the functions that we create inside the classes 

class human{
    //properties
// default they are marked as public
//lets say we have to make it private which will be only used inside the class only
//for private we use # sign
    age=13;
    
   #wt=40;//private
    ht=180;

    //constructor

constructor(newAge,newHeight){

    this.age=newAge;
    this.ht=newHeight;
}




    //behaviour

    walking(){
        console.log("walking",this.#wt); // here this is used to show the current object 
    }
    #talking(){
        console.log("talking");
    }

    // so to access private properties outside class  we use getter and setter

// getter used for fteching 

// setter to modify the value 

get fetchwt(){
    return this.#wt;
}
set modifywt(val){
     this.#wt=val;

}
}
let obj = new human(50,190); // object creation ;

console.log(obj.age);
obj.walking();
console.log(obj.ht);
// fetchwt();
// modifywt(500);
console.log(obj.fetchwt);

//default parameters


function sayname(MyName="prashant"){//default value
    console.log("my name is:",MyName);

}
sayname(); // as we not passsed the value it will give error so how to set a default value 
 //same way to use multipe parameters

 // array , string, objects these can also be passed as default parameters

 //null and undefined  case 
 sayname(null);// it will print null
sayname(undefined);// it will print prashant
// in this case it will take the default value as prashant


//how to send function in default parameters
function getAge(){
    return 180;
}
function utility(name="prashant",age=getAge()){
    console.log(name," ",age);
}
utility();
