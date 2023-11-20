function resetGame(){
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = "<h2>You Won! <span id=\"winner-name\">PLAYER NAME</span></h2>";
    gameOverElement.style.display = "none";
    let gameBoardIndex = 0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoard.children[gameBoardIndex];
            gameBoard.children[gameBoardIndex].textContent = "";
            gameBoardItemElement.classList.remove("disabled");
            gameBoardIndex++;
        }
    }
}



function startNewGame(){
    if(players[0].name === " "  ||  players[1].name === " "){
        alert("please set names for BOTH the players !!!")
        return;
    }

    resetGame();

   playerTurnName.innerHTML = players[activePlayer].name;
   gameArea.style.display = "block";
}

//for showing symbol on clicking

function playerTurn(){
    if(activePlayer === 0){
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }
    playerTurnName.innerHTML = players[activePlayer].name;
}

function displaySymbol(event){
    if(event.target.tagName !== "LI" || gameIsOver){
        return;
    }
    const selectedField = event.target;
    const selectedcolumn = selectedField.dataset.col - 1;
    const selectedrow = selectedField.dataset.row - 1;
 
    if(gameData[selectedrow][selectedcolumn] > 0 ){
        return;
    }
    selectedField.innerHTML = players[activePlayer].symbol;
    selectedField.classList.add("disabled");

   
    gameData[selectedrow][selectedcolumn] = activePlayer + 1;

    // console.log(gameData);
    // [[0,0,0],
    // [0,0,0],
    // [0,0,0]];
    const winnerID = checkForGameOver();

    if(winnerID !== 0){
        endGame(winnerID);
    }

    
    //to check the draw adding count of rounds
    currentRound++;
    playerTurn();
    

}

//checking condition for game winning player

function checkForGameOver(){
    //LOGIC for checking the ROWS
   for(let i =0; i<3 ; i++){
    if(
        gameData[i][0] > 0 &&

        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
       ) {
        return gameData[i][0];
       }


   }
   //LOGIC for checking the COLUMNS
   for(let i =0; i<3 ; i++){
    if(
        gameData[0][i] > 0 &&

        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] === gameData[2][i]
       ) {
        return gameData[0][i];
       }
    }
   
   // LOGIC for checking TOP DIAGONAL (top left to bottom right)
   if(gameData[0][0] > 0 && 
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]){
        return gameData[0][0];
   }
// LOGIC for checking BOTTOM DIAGONAL (bottom left to top right)
   if(gameData[2][0] > 0 && 
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]){
        return gameData[2][0];
   }
   if(currentRound === 9){
      return -1;
   }
  return 0;
}


function endGame(winnerID){
    gameIsOver = true;
    gameOverElement.style.display = "block";
    if(winnerID > 0){
        const winnerName = players[winnerID -1].name;
        gameOverElement.firstElementChild.firstElementChild.innerHTML = "you WON ! " + winnerName;
    }
    else{
        gameOverElement.firstElementChild.innerHTML = "It's a DRAW !"
    }
}













