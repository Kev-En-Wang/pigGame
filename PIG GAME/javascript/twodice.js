/*
    Made By Kevin Wang
    ID 991681013
    June 2022
    Web programming 2
*/

var images=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg'];
var turnNum = -1;
var p1Score = 0;
var p2Score = 0
var turnScore=0;
document.getElementById("rules").style.display="none";

//Initialize the game
function startGame(){
    //Sets initial values
    turnNum = -1; //I retroactively set this to -1 because I realized a mistake
    p1Score = 0;
    p2Score = 0;
    turnScore = 0;
    
    //Sets the UI
    document.getElementById("p1score").innerHTML=p1Score;
    document.getElementById("p2score").innerHTML=p2Score;
    document.getElementById("whoRolls").innerHTML="Player 1's Turn"
    document.getElementById("turnScore").innerHTML=turnScore;
    document.getElementById("rules").style.display="none";
}

//For when the turn ends
function stopTurn(){
    //this sets the turn number to the next person
    turnNum+=1;

    //This sees which player's turn it is through the turn number
    if(turnNum%2==0){
        //Sets the next turn's UI
        p1Score += turnScore;
        document.getElementById("whoRolls").innerHTML="Player 2's Turn"
        document.getElementById("p1score").innerHTML=p1Score;
        
        //Checks win condition
        if (p1Score>=100){
            declareWinner();
        }
    }

    else{
        //Sets the next turn's UI
        p2Score += turnScore;
        document.getElementById("whoRolls").innerHTML="Player 1's Turn"
        document.getElementById("p2score").innerHTML=p2Score;
        
        //Checks win condition
        if (p2Score>=100){
            declareWinner();
        }
    }

    //Sets the next turn's turn score
    turnScore=0;
    document.getElementById("turnScore").innerHTML=turnScore;
}

//for if a single one is rolled
function singleOne(){
    turnScore=0;
    stopTurn();
}

//for if double ones are rolled
function doubleOne(){
    turnScore=0;
    
    //Taken from stopTurn(), it just sets the persons total score to 0
    if(turnNum%2==0){
        p1Score=0;
        document.getElementById("p1score").innerHTML=0;
    }
    else{
        p2Score=0;
        document.getElementById("p2score").innerHTML=0;
    }

    stopTurn();
}

//The main roll dice method
function rollDice(){   
    
    var num1=Math.floor(Math.random()*6); //0-1, 0 inclusive 1:exclusive 0----0.9999999999999999
    var num2=Math.floor(Math.random()*6);//Image numbers
    
    var dice1=document.getElementById("dice1");
    var dice2=document.getElementById("dice2");

    var num=num1+num2+2;

    dice1.src=images[num1];
    dice2.src=images[num2];

    //if a double one is rolled
    if(num==2)
    {
        doubleOne();
        alert("Bad Luck Friendo!!");
    }

    //if either dice a 1 is rolled
    else if(num1==0||num2==0){
        singleOne();
        
    }

    //nothing special happens
    else
    {
        turnScore += num;
        document.getElementById("turnScore").innerHTML=turnScore;
    }
    

}

//For if one player wins
function declareWinner(){
    if(turnNum%2==0){
        alert("PLAYER 1 WINS");
    }
    else{
        alert("PLAYER 2 WINS");
    }

    alert("Press OK to start again")
    startGame();
}

//Shows and hides the rules of the game
function showRules(){
    document.getElementById("rules").style.display="block";
}
function hideRules(){
    document.getElementById("rules").style.display="none";
}
