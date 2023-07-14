// BROWSER EVENTS 

// we will discuss about the Event, respond to event , data stored in event and stop an event and lifecycle of event 
// events are invisible 
// method - monitorEvent se hum koi event ager trigger hota hai toh dekh sakte h 

monitorEvents(document);
// kon se event karne se kya ho rhe hn jaise ki yha click karke yeh aise ho jayega vo ho jayega etc 

// isse saare event ko turn on kar diya dekh sakte h

// EventListner 
// classes are blueprint and objects are reality 
// java script mein interface hota h ager uski baat toh then samjh lena blueprint 
// interface-> blueprint 
// EventTarget -> iterface(blueprint)
// interface implemented by object that can receive events and may have listeners for them 
// blueprint which is top level entity 
// three method addEventListener(), removeEventListener() and .dispatchevent()

// Node which is comes from token are inheret from EventTarget()
// jo method and properties eventTarget ke pass h vo node ke pass h 
// and Node is inheret from Element (element is -> <p>----</p>)

// i.e element have all properties and method same as node 
// EventTarget is parent and other is child 


// addEventListener() - > iss event ke uper kya karna chahate ho or resond to event or listen to event 
// PSEUDOCODE- 
/* <event-target>.addEventListener(<event-to-listen-for>, <function-to-run-where-event=happened>); */
// to understand this we need to understand
// 1. event-target -> which is a component that tell kha pe target ho rha hn event i.e document, p tag, div or video etc
// 2.event-type -> click, double click
// 3. function-> define what to do when event happen
// example 
let content = document.querySelector('h1');
content;
content.addEventListener('click', function() {
    // function define karte hai ki 
    // content ke upper eventlister lgata hu toh uspe click karne ke baad yeh function suru hoga 
    content.style.background = 'red';


});

 



// REMOVE EVENTLISTENER 

// ==(loose equality) allow type coereion i.e where js will try to convert the items being compared to same type
// ===(stirct quality) allow to check type and value 
// remove karne ke liye function same hona chahiye ager diffrent hoga toh remove kaam nhi karega  

// example -
document.addEventListener('click", fucntion(){
    console.log('hi');
});

document.removeEventListener('clcik', function(){
    console.log('hi');
});

// yha pe function jo hain vo different hai same nhi hn 
// memory pe alag refrence hai hn dono ka
    //  now example ->  
    function prinnt(){
        console.log('Hi');
    }
    document.addEventListener('click', print);
    document.removeEventListener('click', print);


// more example



// enentfunction naam hn function jo ki baad mein recall ho rha h 
function eventFunction(){
    console.log('I have clicked in the document');

}

document.addEventListener('click', eventFunction);
document.removeEventListener('click', eventFunction);

// yha pe eventFunction same he funciton ko recall kar rha h 
// removeEventListener tabhi chalega jb 
// removeEventListener-> 1. same target hona chahiye
// 2. same type 
// 3. same function 


// ------------------------------------------------------------------------------------

// PHASES OF AN EVENT 

// 1. capturing phase -> capture karta h tags ko like para ko find karta hn like html then body then div then para this is capturing
// 2. at target phase -> jb vha aagya then vo target phase hoga
// 3. bubbling phase  -> uske baad vapis html pe jata h toh bubbling

// by defalut addEventListener BUbbling phase pe hota h 
// ager capturing phase mein karna ho toh 
// {/* <event.type>.addEventListener(type, listner, true) */}
// type-> click, double click 
// listerner-> function() -> what should happen after event trigger 
// true -> use capture 

// ----------------------------------------------------------------------------------------------------?

// THE EVENT OBJECT 
// when an event occur, addEventListener() function usko ek event object milta hn uske pass lot of information hota hai about event

// code in inndex2.js


// -------------------------------------------------------------------------------------------------------------------------------------------

// THE DEFAULT ACTION 

// anchor tag-> link open different window defalut hota hn yeh but isko defalut change kar sakte hai
// isko prevent kar sakte h by preventDefalut()

let links = document.querySelectorAll('a');
// anchor tag aa jayenge 
let thirdlink = links[2];
thirdlink;

thirdlink.addEventListener9('click' , function(event){
    event.preventDefalut();
    console.log('maxa aaya');
});


// ------------------------------------------------------------------------------------------

// HOW TO AVOID too many events 

let myDivv = document.createElement('div');
for (let i=1; i<=100; i++){
    // creating new element 
    let newelement= document.createElement('p');
    newelement.textcontent  = 'this is para ' + i;
    
    newelement.addEventListener('click', function(event){
        console.log('I have clicked on para');
    });
    myDivv.appendChild(newelement);
}

document.body.appendChild(mydivv);


// div ke ander bhot saare para (p1,p2,p3.....100th ) para hai or haar para ke pass listner hai khud ka vo store hai at divv 
// kya isko append kar sakte h ? 
// toh iske haar para ke pass listener hai ager hum ek he listner bna de or saare ko attach karde ek sath toh short bn jayega or effective bhi 





// opptimze will be ->

let myDiv = document.createElement('div');
function paraStatus(event){
    console.log('I have clicked on para');


}
for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para' + i;

    newElement.addEventListener('click', paraStatus);
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

// now optimize will eventlistner .ager listner vala part jo hai vo div pe lga de 
// ek he mapping kardi div pe 

let myDiv = document.createElement('div');
function paraStatus(event){
    console.log('I have clicked on para');


}
newElement.addEventListener('click', paraStatus);

for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para' + i;

    
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

// --------------------------------------------
// / isme dikkat yeh h ki ager div pe click karunga toh listner active ho jayega vaise phale para1,para2.. pe click karne se kaam karta tha
// isme target property use karenge 
// target property return the element where the event occured 

let myDiv = document.createElement('div');

function parasrarus(event){
    
    console.log('para' + event.target.textContent);
}
myDiv.addEventListener('click', parastatus);

for (let i=1; i<=100; i++){
    // creating new element 
    let newelement= document.createElement('p');
    newelement.textcontent  = 'this is para ' + i;

    myDiv.appendChild(newelement);
}

document.body.appendChild(mydiv);


 


// --------------------------------------------------

// example -> 
// this is html code 
<article id="wrapper'">
    <p>para <span>span </span></p>
    <p>para <span>span </span></p>
    <p>para <span>span </span></p>
</article>

// ager span pe event.target lga diya toh usme bss span ka content print hoga 
// now jo upper hai ager usme sirf span ka content print karvana hai then click on span then only "span pr click kia hai' print hoga"
// ager para pe click then para+span content dono print 

let elemt = document.querySelector('#wrapper');

elemt.addEventListener('click', function(event){
    // if(event.target.nodeName == 'SPAN'){
        // ager specific node pe lgana hn jaise span or para etc 
    console.log('span pr click kia hai' + event.target.textContent); 
    }
// }
);
// JB hum span pe click kare toh bs span pe chale lakin isme para oe click karne pe bhi chal rha hn so humko vo rokna h islye nodeNAME property se bhi chal jayega 


// now javascript ko kb or kha run karna chahhiye mtlb ki kha rakhna chahiye 
// top ya bottom dono mein dikkat hai 
// therefore we used 
<script>
    document.addEventListener('DOMcontantloaded', function(){
        jo bhi tumhara function hai (){

        });
    
</script>

// yeh tabhi load hoga jb domcontent load ho jayega put it is not best practice... best is at footer 



// 