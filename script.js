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
  console.log("readFromCell()");
  return board[row][col];
}

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

/* ########## CONTROLLER ########## */
