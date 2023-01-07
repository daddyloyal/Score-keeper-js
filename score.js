var p1_button = document.querySelector("#p1");
var p2_button = document.querySelector("#p2");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var p1_score = 0;
var p2_score = 0;
var gameOver = false;
var winningScore = 5;
var numInput = document.querySelector("#input");
var winningScoreDisplay = document.querySelector("p span")
var resetButton = document.querySelector("#reset")
p1_button.addEventListener("click", function(event){
    event.preventDefault();
    if(!gameOver) {
        p1_score++;
        if(p1_score === winningScore) {
            score1.classList.add("winner");
            gameOver = true;
        }
        score1.textContent = p1_score;
    }
})
p2_button.addEventListener("click", function(event){
    event.preventDefault();
    if(!gameOver) {
        p2_score++;
        if(p2_score === winningScore) {
            score2.classList.add("winner");
            gameOver = true;
        }
        score2.textContent = p2_score;
    }
})
resetButton.addEventListener("click", reset) 

function reset() {
    p1_score = 0;
    p2_score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove("winner")
    score2.classList.remove("winner")
    gameOver = false;
}

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
})