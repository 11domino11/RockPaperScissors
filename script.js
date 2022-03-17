let computerChoice;
let playerChoice;
let winValue = 0;
let loseValue = 0;
let tieValue = 0;
let numberOfRounds = 0;
// 0 = win, 1 = lose, 2 = tie
let resultValue;
//explain the game on load
alert('Thanks for playing my game, you are on the bottom and computer is on top, select an option to get started');

//shortcuts for each image element
pScissors = document.getElementById('pScissors');
pRock = document.getElementById('pRock');
pPaper = document.getElementById('pPaper');
cScissors = document.getElementById('cScissors');
cRock = document.getElementById('cRock');
cPaper = document.getElementById('cPaper');


//Start the game and check the choice of the player and computer
function PlayRound(playerChoice){
    numberOfRounds++;
    document.getElementById('rounds').innerHTML = 'Rounds: '+numberOfRounds;
    ComputerPlay();
    if(playerChoice =="scissors"){
        pScissors.style.opacity = '1.0';
        pRock.style.opacity = '.25';
        pPaper.style.opacity = '.25';
    }else if(playerChoice =='rock'){
        pRock.style.opacity = '1.0';
        pScissors.style.opacity = '.25';
        pPaper.style.opacity = '.25';
    }else if(playerChoice =='paper'){
        pPaper.style.opacity = '1.0';
        pRock.style.opacity = '.25';
        pScissors.style.opacity = '.25';
    }
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
//checks results of round and modifies scores
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
//randomly selects choice for Computer player
function ComputerPlay(){
    value = Math.floor(Math.random() * 3);
    switch(value){
        case 0:
            computerChoice = "scissors";
            cScissors.style.opacity = '1.0';
            cRock.style.opacity = '0.25';
            cPaper.style.opacity = '0.25';
            break;
        case 1:
            computerChoice = "rock";
            cRock.style.opacity = '1.0';
            cScissors.style.opacity = '0.25';
            cPaper.style.opacity = '0.25';
            break;
        default:
            computerChoice = "paper";
            cPaper.style.opacity = '1.0';
            cRock.style.opacity = '0.25';
            cScissors.style.opacity = '0.25';
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
    cRock.style.opacity = '1';
    cScissors.style.opacity = '1';
    cPaper.style.opacity = '1';
    pPaper.style.opacity = '1';
    pRock.style.opacity = '1';
    pScissors.style.opacity = '1';
    return;
}