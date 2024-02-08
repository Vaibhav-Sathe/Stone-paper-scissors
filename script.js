let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#your-score");
let compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userChoice, compChoice) => {
      if(userWin) {
            console.log(`You win! your ${userChoice} beats ${compChoice}`);
            userScore++;
            userScorePara.innerHTML = userScore;
            msg.innerHTML = `You win! your ${userChoice} beats ${compChoice}`;
            msg.style.background = "red";
      }else{
            console.log(`You lose. ${compChoice} beats your ${userChoice}`);
            compScore++;
            compScorePara.innerHTML = compScore;
            msg.innerHTML = `You lose. ${compChoice} beats your ${userChoice}`;
            msg.style.background = "green";
      }
};

const drawGame = () => {
      console.log("Game is draw!");
      msg.innerHTML = "Game was Draw! play again";
}

const genComChoice = () => {
      const compChoice = ["rock", "paper", "scissors"]
      let randIdx = Math.floor(Math.random() * 3);
      return compChoice[randIdx];
};

const playGame = (userChoice) => {
      console.log("userChoice is",userChoice);
      let compChoice = genComChoice();
      console.log("compChoice is",compChoice);

      if(userChoice === compChoice) {
            // draw
            drawGame();
      }
      else{
            let userWin = true;
            if(userChoice === "rock"){
                  userWin = compChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper") {
                  userWin = compChoice === "scissors" ? false : true;
            }
            else {
                  userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin, userChoice, compChoice);
      }
};

choices.forEach((choice) => {
      choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
            
      });
});