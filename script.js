let computerChoice;
let playerChoice;
let winValue = 0;
let loseValue = 0;

// 0 = win, 1 = lose, 2 = tie
let resultValue;

alert("This is Rock, Paper, Scissors. You will play to 5 wins, can you win? Open up the console to find out.")

playGame();

 function playGame(){   
        if(resultValue == 0){
                console.log(playerChoice + " beats " + computerChoice);
                console.log("You win the round");
                winValue++;
                console.log("Current score is: "+winValue+" to "+loseValue); 
            if(winValue == 5){
                    console.log("You won the game");
                    resetGame();
                }
                playRound();
            }
        else if(resultValue == 1){
                console.log(playerChoice + " loses to " + computerChoice);
                console.log("You lose the round");
                loseValue++;
                console.log("Current score is: "+winValue+" to "+loseValue); 
            if(loseValue == 5){
                    console.log("You lost the game");
                    resetGame();
                }
                playRound();
            }
            else{
                console.log("You both put " + playerChoice)
                console.log("Current score is: "+winValue+" to "+loseValue);
                playRound();
            } 
    }
 function playRound(){
    playerChoice = prompt("Let's play Rock, Paper, Scissors. Whats your choice?").toLowerCase();
    computerPlay();

    if((playerChoice =="scissors" && computerChoice == "scissors") ||
        (playerChoice =="rock" && computerChoice == "rock") ||
        (playerChoice =="paper") && (computerChoice == "paper")){
            resultValue = 2;
    }
    else if((playerChoice =="scissors" && computerChoice =="paper") ||    
        (playerChoice =="rock" && computerChoice =="scissors") ||
        (playerChoice =="paper"&&computerChoice =="rock")){
            resultValue = 0;
    }
    else{
        resultValue = 1;  
    }   
    playGame();
}
function computerPlay(){
    value = Math.floor(Math.random() * 3);
    switch(value){
        case 0:
            computerChoice = "scissors";
            break;
        case 1:
            computerChoice = "rock";
            break;
        default:
            computerChoice = "paper";
            break;
    }
}
 function resetGame(){
    console.log("Current score is: "+winValue+" to "+loseValue); 
    winValue = 0;
    loseValue = 0;
    alert("Press okay to play again.")
    playGame();
}

