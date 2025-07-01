document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector(".btn-outline-primary");
    const exitBtn = document.querySelector(".btn-outline-danger");
  
    startBtn.addEventListener("click", () => {
      const max = parseInt(prompt("Enter a maximum number:"));
  
      if (isNaN(max) || max <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
      }
  
      const random = Math.floor(Math.random() * max) + 1;
      let guess = prompt("Guess the number:");
  
      while (true) {
        if (guess === null || guess.toLowerCase() === "quit") {
          alert("You exited the game.");
          break;
        }
  
        const numGuess = parseInt(guess);
        if (isNaN(numGuess)) {
          guess = prompt("Invalid input. Please enter a number:");
        } else if (numGuess === random) {
          alert(`🎉 Congrats! You guessed it right. The number was ${random}.`);
          break;
        } else if (numGuess > random) {
          guess = prompt("Too high! Try again or type 'quit' to exit:");
        } else {
          guess = prompt("Too low! Try again or type 'quit' to exit:");
        }
      }
    });
  
    exitBtn.addEventListener("click", () => {
      alert("Thanks for visiting! Refresh the page to play again.");
    });
  });
  