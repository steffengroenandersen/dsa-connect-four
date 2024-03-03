"use strict";

window.addEventListener("load", start);

function start() {
  console.log("STARTING PROGRAM...");

  const board = document.querySelector(".board");
  board.addEventListener("click", handleBoardClick);
}

/* ########## VIEW ########## */

function handleBoardClick(event) {
  console.log("Board was clicked!");
  const cell = event.target;

  if (!cell.classList.contains("cell")) {
    console.log("Cell was not clicked!");
    return;
  }

  const col = cell.dataset.col;
  const row = cell.dataset.row;

  console.log("Col: " + col + " and Row: " + row);
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

/* ########## CONTROLLER ########## */
