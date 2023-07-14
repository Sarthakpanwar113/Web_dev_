// FUNCTION 
// a block of code that fulfill a specific task 
// why function ?
// bcz of reusability 

// FUNCTION DECLARATION 
// run()
function run(){
    console.log("running");
}
// function call or invoke 
run();

// HOISTING IS PROCECESS OF MOVING FUNCTION DECLERATION TO THE TOP OF THE FILE 
// DONE BY JS ENGINE AUTOMATICALLY 


// FUNCTION ASSIGNMENT (assign kar diya bss) 
let stand = function walk(){
    console.log('walking');

}

// DECLERATION 
stand();

// jisme function ka name available hoga vo named fucntoin assignment and jisme name nhi hoga vo ANONYMOUS function assignment 


// JS IS DYNAMIC LANGGUAGE 
let x =1;
x= 'a';
console.log(x);

// -------------------------------------------------------------

function sum(a,b){
    return a+b;
}
// console.log(sum(1,2));
// console.log(sum(1,2,3,4,5));
// JS have specical object i.e argument isme kitne bhi argument do function ke ander usse farak nhi padta  
 

// function sum(){
    // or 
function sum(a,b){
    let total=0;
    for(let value of arguments)
    total = total +value;
    return total;
}
let ans =sum(1,2,3,4,5);
// let ans =sum(1,2,3);
// let ans =sum(1,);
console.log(ans);
//  yha pe multiple argument done ke baad bhi run kar jayega or mini dene pe bhi kar jayegga 
// yha pe dynamic kar diya 

// --------------------------------------------------------------------------------------------------

// REST OPERATOR 
// USED BY ... 
function sum(...args){
    console.log(args);
}
sum(1,2,3,4,5,5);
// this will store into an array 

function sum(num,...args){
    console.log(args);
}
sum(1,2,3,4,5,5);
// isme num ke ander 1 chala jayega or baki No. array mein 
// rest parameter must be at define at last 
// -------------------------------------------------------------------------------------------

// DEFAULT PARAMETER 
// function interst (p,r=5,y){ this is defalut for r value and rule hai uske right mein jitne bhi value hai sb defalut hogi 

function interst (p,r,y){
    return p*r*y/100 ;

}
console.log(interst(1000,10,5));

// --------------------------------------------------------------------------------------
// GETTER AND SETTER 
// getter- > access properties 
// setter -> change or update the properties 
 
let person= {
    fname : 'love',
    lname : 'babbar'
};
// niche vala function is only read 
function fullname(){
    return `${person.fname}  ${person.lname}`;
}
console.log(fullname());


let person= {
    fname : 'love',
    lname : 'babbar',
    get fullname(){
        return `${person.fname}  ${person.lname}`;
    },
    // value ke ander pura name aa rha h  so we split it
    set fullname(value){
        if(typeof value!== String){
            throw new Error("you have not sent a string");
        }
        let parts = value.split(' ');
        // parts array bn gya 
        this.fname= parts[0];
        this.lname = parts[1];
    }
// get ,mein value return kar deta hu or set mein jo value ...value mein ayi hn usko update kar dega 
    
};


// this can be access by 
// console.log(person.fullname);
// yeh vala get vala chalega 
person.fullname = 'rahul mishra';
console.log(person.fullname);

// ----------------------------------------------------------------------------------------------------------------

// TRY AND CATCH ( ERROR HANDLING)
try {
    person.fullname = 'rahul mishra';
}
catch(e){
    alert('you have sent a number in fullname');
};

// ---------------------------------------------------------
// GLOBAL SCOPE 
// var  can be acces all the file but if isko function ke ander daal diya then isko outter mein use nnhi kar sakte 
// let keyword ke ander appke variable ka scope hota h jo nearest ke pass hota h 
// ager var function ke anfer define nhi h then vo whole file mein access kar sakte hai 

for (let i =0; i<10; i++){


}
console.log(i)
// this will give error 
for (var i =0; i<10; i++){
}
console.log(i)
// no error 




// REDUCING AN ARRAY 

let arr = [1,2,3,4];
let total =0;

for (let value of arr)
    total = total + value ;
console.log(total);

// ---------------------------------------
let totalSum =0
// arr.reduce(callback function,0 )
// currentvalue behave as loop and accumulator acts as constant value and accumulator initialized with zero
// acc=0
// cuurentvalue=1
// acc=acc+currentvalue=0+1=1
// currentValue =2
// acc=acc + currentValue= 1+2 =3
// currentValue=3 
arr.reduce(accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);

    