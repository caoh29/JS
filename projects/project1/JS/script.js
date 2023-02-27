"use strict";

function getRandomInt(max) {
  return Math.trunc(Math.random() * max + 1);
}

let randomNumber = getRandomInt(20);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  function prompt(value) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Too ${value}!`;
      score--;
      document.querySelector(".score").textContent = `${score}`;
    } else {
      document.querySelector(".message").textContent = "You Lost :(";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.background = "red";
    }
  }
  if (guess == randomNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").textContent = `${randomNumber}`;
    document.querySelector("h1").textContent = `YOU GUESSED!`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > randomNumber) {
    prompt("High");
  } else if (guess < randomNumber) {
    prompt("Low");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = getRandomInt(20);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = `${score}`;
  document.querySelector(".number").textContent = `?`;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "salmon";
  document.querySelector("h1").textContent = `Guess My Number!`;
});
