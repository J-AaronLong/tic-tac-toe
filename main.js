// What Data does the state need to store?
// turn (1 or -1) Player 1 or player 2.
// winner (null, 1, -1, "Tie")
// board ([[0, 0, 0], [0, 0, 0], [0, 1, -1]]) - array of arrays, multi-dimensional
// ************************************************
/*----- constants -----*/
// From render() below, constant
const xAnd0Lookup = {
  0: "",
  1: "X",
  "-1": "O",
};

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
// variables that hold DOM elements we need to access more than once.
const playAgain = document.querySelector("button");

/*----- event listeners -----*/
document.getElementById("board").addEventListener("click", handleBox);
playAgain.addEventListener("click", init);

/*----- functions -----*/
// Init Function HERE:
// Call init function here:
init();

// event handler function below:
// e = event object
function handleBox(e) {
  // event object (box clicks)
  console.log(e.target);
}

function init() {
  //  Initialize all state
  board = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, -1],
  ];
  turn = 1;
  winner = null;
  render();
}

function render() {
  // Render function for message and board state
  board.forEach(function (colMark, colIndex) {
    // Iterate over column array to access box values
    colMark.forEach(function (boxValue, rowIndex) {
      // Select correct div for boxValue (DOM element)
      const boxDiv = document.getElementById(`c${colIndex}r${rowIndex}`);
      boxDiv.textContent = xAnd0Lookup[boxValue];
      // We want to use a data lookup structure as constant, in constant area above to change box to x or o.
    });
  });
}

// Render Function Below:

// function render() {
// 	renderHands();
// 	renderControls();
// 	if (winner) {
// 		renderWinnerMessage();
// 	} else {
// 		renderTurnMessage();
// 	}
// }

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
