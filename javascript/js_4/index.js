// Window and DOM AND BOM 

// windoe\w - is global object created by browser. it represent a browser window 
// window object top level identity hoti h jisme DOMException, BOM JS core hote hai 
// window object provide a method we can control browser window 



// DOM -> DOCUMNENT OBJECT MODEL ... saaare html code ko JS ke object mein convert kar diye isko bolte hai document 
//  if we go to browser con type -> document to get html code

// BOM -> browser se communicate karne ka tarika hai other then html (content) we use BOM 

// DOM -> Document object model it is tree like stucture 

// charater ko tags mein convert then to tags then convert to nodes then it create DOM 
// -------------------------------------------------------------------------------------------------------
// GetElementbyID 
// isse jiski id ="" given hogi usse we can fetch 
// example
document.getElementById('content')
// this is perform in console of browser 
// this method is called on document object 
// it return a single Object 


// ------------------------------------------------------------------
// getElementsByClassName()
// classname ko given hoga uska array mein return de dega 
// same for getElementsByTagName() 

// access element 
// 1. getElementById()
// 2. getElementsByClassName()
// 3. getElementsByTagName()

// -------------------------------------------------------------------------------------
// QUERYSELECTOR()
// used to select element as same as in css by # or . 
querySelector('#header');
querySelector('.header');
// in browser console 
document.querySelector('.text-textapra');

// if we need multiple element 
document.querySelectorAll('.hidden');

// ------------------------------------------------------------------------------------------------

// Update EXISTING CONTENT 
// 1. innerHTML -> get an element and set used to set element's html content
// example 
let codingEx = document.querySelector('.code-example');
// now print it 
codingEx;
codingEx.innerHTML
// 2. .outerHTML 
// 3. .textContent

// 4. .innerText

// 3 and 4 used get/set of texual content 
let company  =document.querySelector('.companyAmz');
company;
// innerHTML mein tag honge toh usko render kiya jayega or textcontent ke ander tags ko texual content ke ander read kiya jayega 
// textcontent and innertext 
// inner mein hidden vala text/element show nhi hoga 


// ------------------------------------------------------------------------
// ADDING NEW ELEMENT/CONTENT 
// 1. .createElement();
let newPara = document.createElement('span');
content.appendChild(newchild);
// append at the end mein add ho jayega 

// ------------------------------------------------------------------------------------
// CREATING TEXT NODE 
let newPara = document.createElement('p');
let textPara = document.createtextpara('yes i am good');
newpara.appendChild(textPara);
content.appendChild(newPara);
// or other method 
let newpara = document.createElement('p');
newpara.textContent= ' i ama good';
content.append(newpara);

// INSERTADJACENTHTML()
// it add html text before the after/before previous sibling 
// it has to called by 2 argument 
// where to location/position 
// 1. beforebegin 
// 2. afterbegin
// 3. beforeend
// 4.after end 

let content = $0;
// jha click huya hoga uska class show ho jayega short method 
content ;

let textToAdd = '<h3> abcd </h3?';

// content.insertAdjacentElement('beforeBegin', textToAdd);
// upper vala give error 
let newtext = document.createElement('h3');
newtext.textContent = 'abcd';
content.insertAdjacentElement('beforeBegin', newtext);
content.insertAdjacentElement('AfterEnd', newtext);

// --------------------------------------------------------------------------------------------------------


// Remove and insert

// method used .reomveChild() 
// just oppsite to appendChild()
// we should know child element and parent element then only we can remove 
// parent.removeChild(childElement)

let childElement = document.querySelector('.tempText');

childElement;

let parentElement = document.querySelector('.chakra-heading');
parentElement;

content.removeChild(childElement);

// or method 
// child.parent.remove(Element); this is another method
// ----------------------------------------------------------------------------------------------------------------
// CSS

//  1.style 
let content =$0;
content;

content.style.color = 'red';

content.style.background = 'white';

// 2. css text (at a time multiple property mein changes kar sakte h)
content.style.csstext = 'color:greeen; background-color; yellow; font-size:4em;';


// 3. setAttribute
content.setAttribute('style',"background-color:red;");
content.setAttribute('style',"color:red;");

// 4. .className
let content = $0;
content;

content.className;
// we get string which contain all class name 
typeof content.className;
// we get string 
content.className.split(' ');

let classNames = content.className.split(' ');
classNames;

// content.className.trim().split(' ');
// classNames = content.className.trim().split(' ');


// 5. .classList 
// it provide list of items 
// type of this is object and return array of classes
// add() , toggle(), and remove () and contain() are availabe method 

