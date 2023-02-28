"use strict";

function getRandomInt(max) {
  return Math.trunc(Math.random() * max + 1);
}

let randomNumber = getRandomInt(20);
let score = 20;
let highscore = 0;

function changeTextContent(selector, sentence) {
  document.querySelector(`${selector}`).textContent = `${sentence}`;
}

function prompt(value) {
  if (score > 1) {
    changeTextContent(".message", value);
    score--;
    changeTextContent(".score", score);
  } else {
    changeTextContent(".message", "You Lost :(");
    changeTextContent(".score", 0);
    document.querySelector("body").style.background = "red";
  }
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (guess == randomNumber) {
    changeTextContent(".message", "Correct Number!");
    document.querySelector("body").style.background = "green";
    changeTextContent(".number", randomNumber);
    changeTextContent("h1", "YOU GUESSED!");
    if (score > highscore) {
      highscore = score;
      changeTextContent(".highscore", highscore);
    }
  } else if (guess > randomNumber) {
    prompt("Too High!");
  } else if (guess < randomNumber) {
    prompt("Too Low!");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = getRandomInt(20);
  changeTextContent(".message", "Start guessing...");
  changeTextContent(".score", score);
  changeTextContent(".number", "?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "salmon";
  changeTextContent("h1", "Guess My Number!");
});
