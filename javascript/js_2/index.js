console.log(1+1)

// INTERATING THROUGH OBJECTS 



let rectangle = {
    length:2,
    breadth:4
};

// FOR IN LOOP
 for (let key in rectangle){
    console.log(key,rectangle[key]);
 }

//  upper ki taarah use karke hum object ke ander key or values use kar sakte h 
// keys are reflected through key variable 
// values are reflected though rectangle[key] 



// FOR OF LOOP 
// these are only apply on interable i.e array and maps

// for(let key of rectangle){
//     console.log(key);
// }

// this will give error bcz rectangle is not iterable
//  so we used 
 for(let key of Object.keys(rectangle)){
    console.log(key);

 }
//  here an array of key will be created and if we replaced keys with entries then we also get values of keys 



// kisi object ke ander koi property exist karte hai ya nhi we check with 
if('color' in rectangle){
    console.log('present');
}
else{
    console.log('absent')
}




// OBJECT CLONING
// -iteration
// -assign
// -spread 



// GARBAGE COLLECTION 
// dynamic memmory allocated karte hai and khud he deallocate karte history.pushState.apply.call...... aise concept hn jo khud he automatically free karde variable and constant so we used garbage collecter
// find constant and variable which are not use amd it dealocate it to free up the space ..background mein run done by garbage collector  


// -----------------------------------------------------------------------

// MATH OBJECT 
// Maths have multipe methods if.e round, max, abs, min and abs(absolute) 

// STRING 
 
let lastName= 'sarthak';
// this will create string 

// lastName. use karte he . jo hn usko object bna deta hai 
// browser pe call hoga by-> lastName.length or lastName[0]
// lastName.startsWith('love'); or lastName.endsWith('heelo'); or lastName.toLowerCase(); or lastName.trim(); or lastName.replace('Babb','car');


let firstName = 'firstName';
// this will create an object of string

// this we be recall in browser by -> typoof firstName 

// example 
let messages = 'this is my first message';
let words = messages.split('');
console.log(words);

// ---------------------------------------------------------------
// TEMPLATE LITERAL 
// Jaise hum input dange vaise he output mein ayega show hoga basically 
// we used back ticks -> `` 
let message =
`this is
my fist
messafe`;
console.log('message');

// --------------------------------------------------------------------------------

// DATE AND TIME 

let date = new Date();
// or 
let date2 = new Date('june 20 1998 07:55 ');
// or 
let date3 = new Date(1998, 6 , 20,7);
console.log(date)

// function/method ko use karke value set karte hai then setter function and recieve kar rhe ho rhe hote h then setter 

// ------------------------------------------------------------------------------------------------------

// ARRAYS 
// this is different collection of items i.e buckets having number boolean and string etc used to store the values  

// CREATION 
let number =[1,24,5];
// insertion 
// at the end 
number.push(9);
// at begin 
number.unshift(8);
// at middle 
number.splice(2,0,'a','b','c');
// 2 index pe delete 0 and insert abc 

// SEARCHING 
console.log(number);
console.log(number.indexOf(8));

// we want to check if number exist in a array 
number.includes(8);


let courses = [
    {no:1,naam:'love'},
    {no:2, naam:'rahul'}
];
console.log(courses);
courses.includes()


// searching mein primities type ko search kar sakte by indexof or include (yha value to value compare)
// while in searching of reference and objects then we used call back function 
// call back is an function passed into another function as an argument which invoked into outer function.

// call back fucntion likhna hoga 
let course =  courses.find(function(course){
    return course.naam === 'love';
 })

console.log(course);


// object ke ader kuch search karna ho we used FIND()_ METHOD 
// syntax -> 
// arrayName.find(predicate function or call back function or comparison) this will return object 

// courses.find() phale 
// then
// courses.find(function(course){
//     return course.naam === 'love';
// })

// this can be esaily readable 
let course = courses.find(course => course.name === 'kilvish');
// yha pe course ke ander  find out karo course find out kare jisme course.naam vo stickly equal too ho kilvish ke 
//  NOW 
// phirse understand 
// courses.find use karna h toh we need to write Predicate function 
// predicate function likhte hai by - 
function(course)
{
    course.naam === 'Love';
    // ager equal hai toh return kardo 
}


let rule= [ 
    {no:1,naam:'love'},
    {no:2, naam:'rahul'}
];
//  targert is to find rule or object with name ' love'  and we know that object find karna hai toh indecof or include method can't be used 
// therefore we used find()
// find have predicate function 
// now predicate function will be 
function(course){
    course.name === 'love';
}
// abb isko find ke ander likh do 


// REMOVING ELEMENT 
// end , biginning and middle 
// for end we used Pop() 
// for begnning we used shift () 
// for middle we used splice() 
// spilce ( 3 this will be index, no. of element u want to delete like of only 4no. then it will be 1 );
// ------------------------------------------------------------------------------
// EMPTYING AN ARRAY 
number = [1,2,3,4]
//  and empty karna h then we can use 
number =[]
// here previous will be stored and removed by garbage values 
// but here is some dikkat 
// we used NumberList.length=0 
let numbers = [1,2,3,4];
let numners2=numbers; 
numners.length = 0;
console.log(numbers);
console.log(numbers2);
// abb dono empty hogye 




// COMBINING AND SLICING ARRAYS 
let first = [1,23,4,5];
let second = [3,45,6];
let combine = first.concat(second);
console.log(combine);

let sliced=  combine.slice(2,4);
// 2 is incuded and 4 is excluded  both are indexs

console.log(sliced);


// SPREAD operator se we can concatena on it using three dot 
// ------------------------------------------------------------------------


// ITERATING AN ARRAY

let arr = [10,20,30,40];
for (let value of arr){
    console.log(value);
}
// or 

arr.forEach(function(number){
    console.log(number);
});
// function(number) is call back function 
// or 
arr.forEach(number=>console.log(number) );


// -------------------------------------------------------

// JOINING ARRAY 
let numbers3 = [10,20,30,40,50];
const joined = numbers3.join(',');
console.log(joined);

// SPLITING ARRAY 
let text = 'this is my first tex';
let parts = message.split(' ');
console.log(parts);

// SORTING ARRAYS 
let numbers4 = [50,26,45,23,25];
numbers4.sort();
console.log(number4)


// ------------------------------------------------------

// FILTERING ARRAY 
// amazon and flipcart mein jo filter hota h 
let num = [24,-45,65,-654,34,23,-1,0];
let filtered=  num.filter(function(value){
    return value>=0;
});
console.log(filtered);
// or 
// let filtered= number.filter(value => value>=0);

// ------------------------------------------------------------


// MAPPING 
// this is used to map each element of array to something else 

let nnumber= [7,8,9,10];
let items= nnumbers.map(function(value){
    return 'student_no' + value;
})
console.log(items);

// output will be 
// 0:"student_no7"
// 1:"student_no8"
// 2:"student_no9"
// 3:"student_no10"

// ARRAY FUNCTION MEIN CONVERT 
let itemns = nnumber.map(value=> 'student_no' + value);

// ------------------------------------------------------------------

// MAPPING WITH OBJECTS 

let nummbers = [1,2,-6,-9];
let filtereds = nummber.filter(Value => value>=0);
// iss filter method lga ke only 2 element ayenge 
// yha pe 0->1
// and 1->1
// mapping with object 

let itemnss = filtereds.map(function(num){
    return {value: num};
    
    // num=>{value:num} this is array function
    // return karunga object reteal 
    // we get 
    // 0-> {value: 1}
    // 1-> {value: 2}
    
})


// or we can use this method also
let itemnss = nummber
                .filter(Value => value>=0)
                .map(num => {value: num});

//    this above is called chaning              
console.log(itemss) ;

// output :
// 0: {value:1}
// 1: {value:2}
// length =2

// so here 0 ki mapping value 1 ke sath kardi and 1 ki mapping value 2 ke sath 





 






