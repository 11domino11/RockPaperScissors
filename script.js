let computerChoice;
let playerChoice;
let winValue = 0;
let loseValue = 0;
let tieValue = 0;
let numberOfRounds = 0;
// 0 = win, 1 = lose, 2 = tie
let resultValue;

function PlayRound(playerChoice){
    numberOfRounds++;
    document.getElementById('rounds').innerHTML = 'Rounds: '+numberOfRounds;
    ComputerPlay();
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
       PlayGame(playerChoice,computerChoice);   
}

 function PlayGame(playerChoice,computerChoice){   
    console.log('The selected player choice is now '+playerChoice);
        if(resultValue == 0){
                console.log(playerChoice + " beats " + computerChoice);
                console.log("You win the round");
                winValue++;
                document.getElementById('wins').innerHTML = 'Wins: '+ winValue; 
            if(winValue == 5){
                    console.log("You won the game");
                    ResetGame();
                }
            }
        else if(resultValue == 1){
                console.log(playerChoice + " loses to " + computerChoice);
                console.log("You lose the round");
                loseValue++;
                document.getElementById('loses').innerHTML = 'Wins: '+ loseValue;
            if(loseValue == 5){
                    console.log("You lost the game");
                    ResetGame();
                }
            }
            else{
                console.log("You both put " + playerChoice);
                tieValue++;
                document.getElementById('ties').innerHTML = 'Ties: '+tieValue;
            } 
        return;
    }
function ComputerPlay(){
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
 function ResetGame(){
    alert("Final score is: "+winValue+" to "+loseValue); 
    winValue = 0;
    loseValue = 0;
    tieValue = 0;
    numberOfRounds = 0;
    document.getElementById('wins').innerHTML = 'Wins: '+ winValue;
    document.getElementById('loses').innerHTML = 'Wins: '+ loseValue;
    document.getElementById('ties').innerHTML = 'Ties: '+ tieValue;
    document.getElementById('rounds').innerHTML = 'Rounds: '+ numberOfRounds;
    return;
}