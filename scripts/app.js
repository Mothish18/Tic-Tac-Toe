// variables
const gameData = [[0,0,0],
                  [0,0,0],
                  [0,0,0]];

let playerID = 0;
let activePlayer = 0;
let currentRound = 0;
let gameIsOver = false;

//players array for game
let players = [
    {
        name: " ",
        symbol: "X" 
    },
    {
        name: " ",
        symbol: "O" 
    }
];

const playerDetailsElement = document.getElementById("config-overlay");
const backgroundDetailsElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const nameError = document.getElementById("name-error");
const newGameBtn = document.getElementById("startNewGame");
const gameArea = document.getElementById("active-game");
const playerTurnName = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");


const player1EditBtn = document.getElementById("edit-btn1");
const player2EditBtn = document.getElementById("edit-btn2");
const cancelButton = document.getElementById("cancel");


// game boxes

// const gameBoxes = document.querySelectorAll("#game-board li");
//  for(const gameBox of gameBoxes){
//     gameBox.addEventListener("click", displaySymbol);        // event listener for single element inside the for-of loop;
//  }

// boxes are selected and will be stored as an array
 //[li, li, li ,li ...]                                        // to get access to single box use FOR-OF loop and then select the single variable;
 //loop for game box

 // select single li element

const gameBoard = document.getElementById("game-board");




player1EditBtn.addEventListener("click", getPlayerInfo);
player2EditBtn.addEventListener("click", getPlayerInfo);

cancelButton.addEventListener("click", closePlayerInfo);
backgroundDetailsElement.addEventListener("click", closePlayerInfo);

formElement.addEventListener("submit", savePlayerInfo);

newGameBtn.addEventListener("click", startNewGame);

gameBoard.addEventListener("click", displaySymbol);




















// For changing Themes

const darkTheme = document.getElementById("dark-theme");
const lightTheme = document.getElementById("light-theme");
const mainHeader = document.getElementById("main-header");
const winnerBlock = document.getElementById("game-over");
const yourTurn = document.getElementById("turn");
darkTheme.addEventListener("click", getDarkTheme);
lightTheme.addEventListener("click", getlightTheme);


function getDarkTheme(){
    mainHeader.classList.add("dark");
    document.body.classList.add("dark-body");
    winnerBlock.classList.add("dark-win");
   yourTurn.classList.add("dark-turn");
}
function getlightTheme(){
    mainHeader.classList.remove("dark");
    document.body.classList.remove("dark-body");
    winnerBlock.classList.remove("dark-win");
    yourTurn.classList.remove("dark-turn");
}
