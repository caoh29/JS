"use strict";

function getRandomInt(max) {
  return Math.trunc(Math.random() * max + 1);
}

let randomNumber = getRandomInt(20);
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;

  if (guess == randomNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector("body").style.background = "green";
    document.querySelector(".number").textContent = `${randomNumber}`;
    document.querySelector("h1").textContent = `YOU GUESSED!`;
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!";
      score--;
      document.querySelector(".score").textContent = `${score}`;
    } else {
      document.querySelector(".message").textContent = "You Lost :(";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.background = "red";
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = `${score}`;
    } else {
      document.querySelector(".message").textContent = "You Lost :(";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.background = "red";
    }
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
});
