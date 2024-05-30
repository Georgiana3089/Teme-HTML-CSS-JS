"use strict";

let roundWinner = [];

let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let buttons = document.querySelectorAll(".btn");
console.log(buttons);

function play(src = "smb_kick.wav") {
  new Audio("smb_kick.wav").play();
}

function resetSound(src = "smb_breakblock.wav") {
  new Audio("smb_breakblock.wav").play();
}

let reset = function () {
  roundWinner = [];
  resultDisplay.textContent = "Let the game begin!";
  document.getElementById("resultDisplay").style.color = "#82c91e";
  document.getElementById("resultDisplay").style.fontSize = "32px";
  computerScoreDisplay.textContent = "0";
  playerScoreDisplay.textContent = "0";
  playerDisplay = "";
  computerDisplay = "";
};
let computerChoice = function () {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

let winner = function (computerChoice, playerChoice) {
  let computerDisplay = document.getElementById("computerDisplay");
  let playerDisplay = document.getElementById("playerDisplay");
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer : ${computerChoice}`;

  if (
    (computerChoice === "rock" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "rock")
  ) {
    roundWinner.push("Player");
    resultDisplay.textContent = `You won the round!🎉`;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    roundWinner.push("Computer");
    resultDisplay.textContent = `Computer won the round!`;
  } else {
    roundWinner.push("TIE!");
    resultDisplay.textContent = `It's a tie!🤜🤛`;
  }

  console.log(computerChoice);
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.id === "reset") {
      return reset();
    }
    console.log(this.id);
    winner(computerChoice(), this.id);
    console.log(roundWinner);

    let computerWins =
      roundWinner.filter((element) => element === "Computer").length === 3;

    let computerWinTimes = roundWinner.filter(
      (element) => element === "Computer"
    ).length;
    let playerWins =
      roundWinner.filter((element) => element === "Player").length === 3;
    let playerWinTimes = roundWinner.filter(
      (element) => element === "Player"
    ).length;

    if (computerWins) {
      resultDisplay.textContent = "YOU LOST! 😭";
      document.getElementById("resultDisplay").style.color = "#1971c2";
      computerScoreDisplay.textContent = computerWinTimes;
      playerScoreDisplay.textContent = playerWinTimes;

      console.log(computerWins);
      roundWinner = [];
      var youLost = new Audio("smb_gameover.wav");
      youLost.play();
    }

    if (playerWins) {
      resultDisplay.textContent = "CONGRATS,YOU WON! 🏆";
      document.getElementById("resultDisplay").style.color = "#f59f00";
      document.getElementById("resultDisplay").style.fontSize = "42px";
      computerScoreDisplay.textContent = computerWinTimes;
      playerScoreDisplay.textContent = playerWinTimes;
      console.log(playerWins);
      roundWinner = [];
      var winnerSound = new Audio("smb_stage_clear.wav");
      winnerSound.play();

      const canvas = document.getElementById("canvas");
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ["🍄"],
        emojisSize: 100,
        confettiNumber: 50,
      });

      // const resultDisplayConfetti = playerWins;

      //   resultDisplayConfetti.addEventListener("click", () => {
      //     jsConfetti
      //       .addConfetti({
      //         emojis: ["🍄"],
      //         emojiSize: 70,
      //         confettiNumber: 30,
      //       })
      //       .then(() => jsConfetti.addConfetti());
      //   });
    }
  });
});
