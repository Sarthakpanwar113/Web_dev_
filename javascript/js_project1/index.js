const boxes= document.querySelectorAll(".box");
const gameinfo = document.querySelector(".game-info");
const neewgamebtn = document.querySelector(".btn");



let currentplayer;
let gamegrid;
// game kha tk pouch gya 

// game pattern to win -
// 0,1,2
// 3,4,5
// 6,7,9
// 0,3,6
// 1,4,7
// 2,5,8
// 0,4,8
// 2,4,6
const winningpositions = [
[0,1,2],
[3,4,5],
[6,7,9],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
    
];

// lets create a function to initslise the game 
 function initgame(){
    currentplayer = "X";
    gamegrid = ["","","","","","","","",""];

    newgamebtn.classList.remove("active");
    gameinfo.innerHTML = `current player - ${currentplayer}`;
 }

initgame();

boxes.forEach((box, index)=> {
    box.addEventListener("click", () =>{
        handleClick(index);
     } )
    });

