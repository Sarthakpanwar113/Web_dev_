// JS DOM-4 

// -----------------------------------------------------------?---------------------------------------------
    API 

// Application programming interface 

// features of async code 
//1. clean and concise 
// 2. better error handling 
// 3. debugging easier 



// ------------------------------------------------------------




// PROMISE 

// async code ko backend pe slowly exectute karta hn yha toh fullfill karega ya toh reject 
// promise yha toh fullfill ho jayega ya vrna reject ho jayega 
// ager appko parallel he chizz execute karna chahate ho js mein then we use promise 


let meraPromise = new Promise(function(resolve,reject){
    console.log('i am inside promis');
    resolve(1998);
})

console.log('pehla');


// or 

let meraPromises = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am inside promise');
    }, 5000);
    // resolve(2233);
    reject(new Error('bhaisahab error aaaye hai'))
    
});
console.log('pehla');

// -----------------------------------------------------------------

// syntex 
let p = new Promise(function(resole,reject)){

};


// promise pe do method 

then() and catch()
// catch is used for error handling 
// ager promise sucessfully kaam karega toh value return dega uske value pe kaam karna chahate ho then used method then() 


let meraPromisess = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am inside promise');
    }, 5000);
    // resolve(2233);
    reject(new Error('bhaisahab error aaaye hai'))
    
});

meraPromisess.then((value) => {console.log(value)});
meraPromisess.catch();

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

let waadaal1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('set timeout started');

    },2000);
    resolve(true);
})
// jaise he waadaa1 complete ho jaye then mujha kuch or chalana h 

let output = waadaa1.then(() => {
    let waadaa2 = new Promise(function(resolve, reject){
        setTimeout(()=> {
            console.log('setimeout2 started');
        },300);
        resolve("waada 2 resolved ");
    })
    return waadaa2;
// waadaa2 output mein store hogya then usko niche print karva diya 
})
output.then((value) => console.log(value));
 

// output will be 
waada2 resolved 
setimeout stared 
setimeout2 started 

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------



// if 50 Promise hai toh then ?
// kya phir 50 then use karenge?
// answer- NO 

// Async -await use karte h ... special syntax used to work with promises 
// like ager do p1,p2 promise hai toh await use karke then we can wait p1 untill it run finished then after it will go to p2 


// abb async kasie bnana h ?

async function abcd(){
    return 7;
}
// write -
// abcd() on console to see result 

// async function ek promise return karta h bhale he 7 dekh rha h but vo ek promise hai 

// -----------------------------------------------------------------------------------------------------------------

async function utility()
{
let delhiMausam =  new Promise((resole,reject) => {
    setTimeout(() => {
        resole("delhi me bhot garmi hai");
    }, 1000);
});

let hydMausam =  new Promise((resole,reject) => {
    setTimeout(() => {
        resole("hyderabad is so cool");
    }, 5000);
});

let dM = delhiMausam;
let hM = hydMausam;

return [dM, hM];

}

// console pe function run kar lena like -> utility ()

// yeh promise ek sath chal rhe h  ager wait karvana hai toh await use karna hai 

let dM =await delhiMausam;
let hM =await hydMausam;

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// FETCH API 

// fetch api ek promise return karta hai 


async function utility(){

let content =await fetch('https://jsonplaceholder.typicode.com/posts/1');
let output =await content.json();

console.log(output);
}
utility();
// function call kardi 

// fetch api mein jb get() use karte h yo retrive data 
// we can check status by a.status , a.ok, a.json , a.text 


fetch ("url", Option) 
option mein header:{
    authutication key bhejta h 
}
//  isse pta chalega unique user ne request ki hai 

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// POST CALL  
//  to send any data 


let option ={
    method : post 
    header

    // etc.  abb internet se format dekhlo 
}

let options = {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    Headers:{
        'content-type' : 'application/json; charset=UTF-8',

    },

};

let content =fetch('htpps://jscopalcerholder.snjjd', options);


// isme iska mtlb yeh huya ki 
title: 'foo',
        body: 'bar',
        userId: 1, 
        // yeh data uper vale ko appne iss fetch url databases mein store karo 
    
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------

async function helper(){

    let options = {
        method: 'POST',
        // stringify is used to convert javascript value(objecys) to json string  
        body: JSON.stringify({
            title: 'babbar',
            body: 'tagddi',
            userId: 69,
            weight: 90,
        }),
        Headers:{
            'content-type' : 'application/json; charset=UTF-8',
    
        },
    
    };
    
    let content =await fetch('htpps://jscopalcerholder.snjjd', options);
    let response = content.json();
    return response;
}




async function utility(){
    let ans =await helper();
    console.log(ans);
}

utility();

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------


// CLOSURES 

// top level entity hai jisme all function + data availabe h 

// function ke ander functino 

// let -> block scoped i.e valied for only curly bracket 
Function init(){
    let name = "mozilla";
    function displayName(){
        console.log(name);
    }
    displayName();
}
init();

// inner function ka CLOSURES function ke data ...closure mein honge 
// baki jada samjh nhu aya  mujha 

// closure surrending state ki baat karte hai 
// nested function hai toh always closure jo ki refeerence use karta h 

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------