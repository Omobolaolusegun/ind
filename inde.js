const cell = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelectorAll("#restartBtn");
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame() {
    ClientRectList.forEach(cell => cell.addEventlistener("click",restartBtn.addEventlistener("click", restartGame)));
    statusText.textContent = ${currentPlayer} 's turn';
}

function cellClick() {
    
}

function updateCell(cell, index) {
    
}

function changePlayer() {
    
}
function checkwinner() {
    
}
function restartGame() {
    
}