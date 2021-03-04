// What Data does the state need to store?
// turn (1 or -1) Player 1 or player 2.
// winner (null, 1, -1, "Tie")
// board ([[0, 0, 0], [0, 0, 0], [0, 1, -1]]) - array of arrays, multi-dimensional
// ************************************************
/*----- constants -----*/
// From render() below, constant
const xAndOLookup = {
  0: null,
  1: "X",
  "-1": "O",
};

const winnerCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
// variables that hold DOM elements we need to access more than once.
const playAgain = document.querySelector("button");
const gameMsg = document.getElementById("msg");
// const boxes = [...document.querySelectorAll("#board > div")];
const boxes = document.querySelectorAll("#board > div");
/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleBox);
playAgain.addEventListener("click", init);

/*----- functions -----*/
// Init Function HERE:
// Call init function here:
init();

// event handler function below:
function handleBox(e) {
  // event object (box clicks)
  const idx = board.indexOf(e.target);
  console.log(idx);
  if (board[idx] || winner) return;
  board[idx] = turn;
  turn *= -1;
  winner = getWinner();
  render();
}

function getWinner() {
  let winner = null;
  winnerCombos.forEach(function (combo, index) {
    if (Math.abs(board[0] && board[1] && board[2]) === 3) return board[0];
    if (Math.abs(board[3] && board[4] && board[5]) === 3) return board[3];
    if (Math.abs(board[6] && board[7] && board[8]) === 3) return board[6];
    if (Math.abs(board[0] && board[3] && board[6]) === 3) return board[0];
    if (Math.abs(board[1] && board[4] && board[7]) === 3) return board[1];
    if (Math.abs(board[2] && board[5] && board[8]) === 3) return board[2];
    if (Math.abs(board[0] && board[4] && board[8]) === 3) return board[0];
    if (Math.abs(board[2] && board[4] && board[6]) === 3) return board[2];
  });
  if (winner) {
    return winner;
  } else if (board.includes(null)) {
    return null;
  } else {
    return "T";
  }
}

function init() {
  //  Initialize all state
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
}

function render() {
  // Render function for message and board state
  // board.forEach(function (box, boardIndex) {
  // Iterate over column array to access box values
  board.forEach(function (boxValue, rIndex) {
    boxes[rIndex].textContent = boxValue;
    // console.log(box);
    // Select correct div for boxValue (DOM element)
    const boxDiv = document.getElementById(`${rIndex}`);
    boxDiv.textContent = xAndOLookup[boxValue];
    console.log(boxDiv, rIndex);
    // Use a data lookup structure as constant, in constant area above to change box to x or o.
  });
  // Render the message
  if (winner === "T") {
    gameMsg.textContent = "Tie Game";
  } else if (winner) {
    gameMsg.innerHTML = `${xAndOLookup[winner].toUpperCase()} is the Winner!`;
  } else {
    gameMsg.innerHTML = `${xAndOLookup[turn].toUpperCase()}'s Turn`;
  }
  playAgain.style.visibility = winner ? "visible" : "hidden";
}

// *****************************************************

// Minimm requirements for this project below:
/*
Minimum Requirements
Display an empty tic-tac-toe board when the page is initially displayed.
A player can click on the nine cells to make a move.
Every click will alternate between marking an X and O.
Once occupied with an X or O, the cell cannot be played again.
Provide a Reset Game button that will clear the contents of the board.
*/
