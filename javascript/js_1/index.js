console.log('lets start')


// objects create 

let rectangless={
    length:1,
    breadth:2,
// behaviour add 
// niche jo hai vo method hai 
    draw: function() {
        console.log('drawing rectangle');
}

};

// isko bolte ha object oriented programming ...rectangle.breadth. object ke ander properties 

// if we need to create multiple reactnagle then we use 
// so we need funtion jo object create karta ho 
// that is why we used factory finction method  or construtor function

// FACTORY FUNCTION 
// function createRectangle(){
//     let rectangle={
//         length:1,
//         breadth:2,
        
        // draw(){}  this can alos be used
    //     draw: function() {
    //         console.log('drawing rectangle');
    // }
    
    // };
    // return rectangle

    // function bnaya then jo object bna dega 


// }

// factory function object create kar rha h then usko access karna h toh we make variable 
// yha niche createRectangle function call kar diya then iska jo bhi output ayega usko variable mein store karva diya 

//   --------------let reactnagleobj2 = createRectangle();--------------



// ager we want to take input then we have use this- 
function createRectangle(len,bre){
    let rectangle={
        length:len,
        breadth:bre,
        
        draw: function() {
            console.log('drawing rectangle');
    }
    
    };
    return rectangle
}

let obj1=createRectangle(5,4);





// CONSTRUCTOR FUNCTION 
// CONSTRUCTOR FUNCTION 

// we used pascal notation i.e - first letter of every word is capital 
// this is property or method used to inialise or define...Reactnagle. we initiise value 
// we don't return here 
function Reactangles(){
    // this describe about current object 

    this.lengths = 1;
    this.breadths = 7;
    this.draw = function(){
        console.log('drawing')
    }
 } 

//  object creation using construtor function 

let reactangleObject = new Reactangles();
// new empty object bnaya uske ander Reactangles vala function call kar diya or usko  rectangleobject ke ander save kar diya  

reactangleObject.color = "yellow";
console.log(reactangleObject);


// --------------------------------------------------------------------------------------------

//  HAAR object ka constructor hai ... function is also an object 


// PRIMITIVE ARE CPOIED BY THEIR VALUES AND REFERENCES ARE COPID BY THIER ADDRESS/REFERENCE 
