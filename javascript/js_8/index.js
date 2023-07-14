const countvalue = document.querySelector('#counter');
// getElementid use kar sakte h 

function increment  ()  {
    // get the value from ui 
    let value = parseInt( countvalue.innerText);
    // update the value 
    value = value+1;
    // set the value onto UI 
    countvalue.innerText =value;
};





function decrement () {
    // get the value from ui 
    // count value ka inner text nikal diya usko string mein mila then uska number mein change kar diya 
    let value = parseInt( countvalue.innerText);
    // update the value 
    value = value-1;
    // set the value onto UI 
    countvalue.innerText =value;
    // now countvalue mein daal diya ya update kar diya 

};



