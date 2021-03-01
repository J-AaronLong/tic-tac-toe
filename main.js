// What Data does the state need to store?
// turn (1 or -1) Player 1 or player 2.
// winner (null, 1, -1, "Tie")
// board ([[0, 0, 0], [0, 0, 0], [0, 1, -1]]) - array of arrays, multi-dimensional
// ************************************************
/*----- constants -----*/

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
  // event object
  console.log(e.target);
}

function init() {
  //  Initialize all state
  board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  turn = 1;
  winner = null;
  render();
}

function render() {
  board.forEach(function (mark, index) {
    console.log(mark, index);
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
