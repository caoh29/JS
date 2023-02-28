"use strict";

function changeTextContent(selector, sentence) {
  document.querySelector(`${selector}`).textContent = `${sentence}`;
}

function changeBackgroundColor(selector, color) {
  document.querySelector(`${selector}`).style.background = `${color}`;
}

function getRandomInt(max) {
  return Math.trunc(Math.random() * max + 1);
}

function updateScoreAndMessage(value) {
  if (score > 1) {
    changeTextContent(".message", value);
    score--;
    changeTextContent(".score", score);
  } else {
    changeTextContent(".message", loosingMessage);
    changeTextContent(".score", 0);
    changeBackgroundColor("body", gameLostColor);
  }
}

let randomNumber = getRandomInt(20);
let score = 20;
let highscore = 0;

const guessHigherNumber = "Too High!";
const guessLowerNumber = "Too Low!";

const loosingMessage = "You Lost :(";

const defaultGameColor = "salmon";
const gameLostColor = "red";
const gameWonColor = "green";

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (guess == randomNumber) {
    changeTextContent(".message", "Correct Number!");
    changeBackgroundColor("body", gameWonColor);
    changeTextContent(".number", randomNumber);
    changeTextContent("h1", "YOU GUESSED!");
    if (score > highscore) {
      highscore = score;
      changeTextContent(".highscore", highscore);
    }
  } else if (guess > randomNumber) {
    updateScoreAndMessage(guessHigherNumber);
  } else if (guess < randomNumber) {
    updateScoreAndMessage(guessLowerNumber);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = getRandomInt(20);
  changeTextContent(".message", "Start guessing...");
  changeTextContent(".score", score);
  changeTextContent(".number", "?");
  document.querySelector(".guess").value = "";
  changeBackgroundColor("body", defaultGameColor);
  changeTextContent("h1", "Guess My Number!");
});
