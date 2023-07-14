// today topic 
// performance

// measure speed of code 
// how to write effecient and performing code (best practice)
// event loop in js

// adding 100para 
for( let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para' + i;

    document.body.appendChild(newElement);
}

// optimzie a bit :

let mydiv= document.createElement('div');

for (let i=1; i<=100; i++){
    let element = document.createElement('p');
    element.textContent = 'this is para' + i ;

    mydiv.appendChild(element);


}

document.body.appendChild(mydiv);


// standard measure to merasure how long your code take to run 
// i.e 
performance.now()
// ----------------------------------------------------------------------------

const t4= performance.now();
const t3= performance.now();
console.log("this took" + (t4-t3) + ms )

// ---------------------------------------------------------------------

// reflow and repaint 
// new elemt jo dalte h usme jo kha dalna hn kha pe rakhna hn postion dimension isko reflow bolte hn.. like kitna bada circle add karna h 
// or iamge ko pixel by pixel arrange karne ko repaint 

// good practice- minimum repaint and reflow 

// phale para ko mein reflow hoya then repaint and same for 2nd para approx 100th time hoga 
// 100 baar reflow and 100 repaint 

// this should be Minimum to be optimize 

// ---------------------------------------------------------
// best practice 

// DOCUMENT FRAGMENT 
// light weight document object 
// phale saare para ko fragment mein add kar denge 
// or yha pe zero repaint and reflow 
// afer isko document mein add karenge toh 1 baar reflow and 1 baar repaint 


let fragment = document.createDocumentFragment();
for (let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent(newElement);

}
document.body.appendChild(fragment);
// yha pre Single reflow and single repair 
//  so yha ager DOM mein append kar reh h toh multiple time then we used fragment 
// DOm KO BAAR BAAR update kar reh ho then use fragment 


// -----------------------------------------------------------------------------------------------

// THE CALL STACK 
 
// single treading - one command at a time 
// JS IS single treaded language hai .ie. yeh ek baar mein ek he command process kar pati hai 





function addPara(){
    let para =document.createElement('p');
    para.textContent = 'js is single';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para =document.createElement('p');
    para.textContent = 'kya haal chaal';
}

addPara();
appendNewMessage();

// function call nhi hoga untill recall na kare so phale addPara() then appendNewMessage() 
// this is called single thread lang.. 

// obsesrvation 
// 1. 'run to completion' - saare line compelete karke ayunga function ko 
// 2. js it Doesn;t execute at a single time 


// humko kaise pta chalega ki yha se start hoga then yha pe jayega then vha jayega then yha ayegga  etc 

// this can be understand by Call stack 

// call stack bascially track kar rha hn every funciton .. it is stack like struture 
 
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

EVENT LOOP 

// synchronous -> occuring at the same time 


// eventlistner is asyc 
content.addEventListener('click', function(){

});




// to understand eventloop we need to understand 
// 1. call stack 
// 2. BROWSER (addeventlistner )
// 3. event queue (function queue ke ander aagyi or yeh execute tb he hoga jb call stack empty hoga )

// Asynco code is using JS EVENT LOOP  MTLB DEPEND KARTA H

// async code is handling done by browser 

// async code stack mein jata hn then browser mein jata hn then queue mein if stack empty then traansfer to stack then run it 

// ------------------------------------------------------------------------------------------------------------------------------------------------

// setTimeout

setTimeout(function()  {
console.log('hi');    
}, 4000);

// so yha pe 4000 mili sec baad run karega vo bhi guraneter nhi hn .... it is minimum time hn
// itne time ke baad function execute hoga 


1. console.log('hi');
2. setTimeout(fucntion{
    console.log("hey");
},5000);

3. console.log('xyz')

// setTimeout.........  async code h toh browser ko bhej dega then 5000 milisec baad then queue ko bhej dega call stack empty hoga then usko bhej dega ;
// isko he bolte hn EVENTLOOP 

// ager time mein 0 de diya then kya hoga immediatily run karega ? 
// answer is  no 
// whenever you are trying to defer(talna) something untill stack is clear 

