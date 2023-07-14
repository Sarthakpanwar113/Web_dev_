// CONSTRUCTOR FUNCTION 

// we used pascal notation i.e - first letter of every word is capital 
// this is property or method used to inialise or define...Reactnagle. we initiise value 
// we don't return here 
 function Reactnagle(){
    // this describe about current object 

    this.length = 1;
    this.breadth = 2;
    this.draw = function(){
        console.log('drawing')
    }
 }

//  object creation using construtor function 

let reactnagleObject = new Reactnagle();