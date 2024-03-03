"use strict";

window.addEventListener("load", start);

function start() {
  console.log("STARTING PROGRAM...");

  const board = document.querySelector(".board");
  board.addEventListener("click", handleBoardClick);
}

/* ########## VIEW ########## */

function displayBoard() {
  console.log("displayBoard()");

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      const value = readFromCell(row, col);
      const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

      if (value === 1) {
        cell.style.backgroundColor = "red";
      }

      if (value === 2) {
        cell.style.backgroundColor = "blue";
      }
    }
  }
}

// Set turn
let turn = 2;

function handleBoardClick(event) {
  //console.log("Board was clicked!");
  const cell = event.target;

  if (!cell.classList.contains("cell")) {
    //console.log("Cell was not clicked!");
    return;
  }

  const col = cell.dataset.col;

  // Switch turn
  turn = turn === 1 ? 2 : 1;

  addToColumn(col, turn);
  displayBoard();
  if (checkForWin()) {
    console.log("WINNER!");
  }
}

/* ########## MODEL ########## */
const board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

function writeToCell(row, col, value) {
  //console.log("writeToCell()");
  board[row][col] = value;
  console.table(board);
}

function readFromCell(row, col) {
  //console.log("readFromCell()");
  return board[row][col];
}

/* ########## CONTROLLER ########## */
function addToColumn(col, value) {
  console.log("addToColumn()");

  if (board[0][col] === 1) {
    console.log(`Board is full at board[0][${col}]`);
    return;
  }

  for (let row = 5; row >= 0; row--) {
    if (board[row][col] === 0) {
      writeToCell(row, col, value);
      return;
    }
  }
}

function checkForWin() {
  // Check horizontally

  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] !== 0 &&
        board[row][col] === board[row][col + 1] &&
        board[row][col] === board[row][col + 2] &&
        board[row][col] === board[row][col + 3]
      ) {
        return true;
      }
    }
  }

  // Check vertically
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      //console.log(`board[${row}][${col}]`);

      console.log(`board[${row}][${col}](${board[row][col]}) !== 0 &&
      board[${row}][${col}](${board[row][col]}) === board[${row} + 1][${col}](${board[row + 1][col]}) &&
      board[${row}][${col}](${board[row][col]}) === board[${row} + 2][${col}](${board[row + 2][col]}) &&
      board[${row}][${col}](${board[row][col]}) === board[${row} + 3][${col}](${board[row + 3][col]})`);

      if (
        board[row][col] !== 0 &&
        board[row][col] === board[row + 1][col] &&
        board[row][col] === board[row + 2][col] &&
        board[row][col] === board[row + 3][col]
      ) {
        return true;
      }
    }
  }
  return false;

  /*
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      console.log(`Checking board[${row}][${col}]`);

      console.log(`
      board[${row}][${col}] !== 0 &&
      board[${row}][${col}] === board[${row}][${col} + 1] &&
      board[${row}][${col}] === board[${row}][${col} + 2] &&
      board[${row}][${col}] === board[${row}][${col} + 3]`);

      if (
        board[row][col] !== 0 &&
        board[row][col] === board[row][col + 1] &&
        board[row][col] === board[row][col + 2] &&
        board[row][col] === board[row][col + 3]
      ) {
        return true; // Four consecutive pieces found horizontally
      }
    }
  }
  
  // Check vertically
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 7; col++) {
      if (
        board[row][col] !== 0 &&
        board[row][col] === board[row + 1][col] &&
        board[row][col] === board[row + 2][col] &&
        board[row][col] === board[row + 3][col]
      ) {
        return true; // Four consecutive pieces found vertically
      }
    }
  }

  // Check diagonally (from top-left to bottom-right)
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        board[row][col] !== 0 &&
        board[row][col] === board[row + 1][col + 1] &&
        board[row][col] === board[row + 2][col + 2] &&
        board[row][col] === board[row + 3][col + 3]
      ) {
        return true; // Four consecutive pieces found diagonally (top-left to bottom-right)
      }
    }
  }

  // Check diagonally (from top-right to bottom-left)
  for (let row = 0; row < 3; row++) {
    for (let col = 3; col < 7; col++) {
      if (
        board[row][col] !== 0 &&
        board[row][col] === board[row + 1][col - 1] &&
        board[row][col] === board[row + 2][col - 2] &&
        board[row][col] === board[row + 3][col - 3]
      ) {
        return true; // Four consecutive pieces found diagonally (top-right to bottom-left)
      }
    }
  }

  return false; // No win condition found
*/
}
