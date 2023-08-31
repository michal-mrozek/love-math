document.addEventListener('DOMContentLoaded',function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type")=== "submit"){
                checkAnswer();
            }else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})


function runGame(gameType){
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let caluclatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === caluclatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :)");
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer is ${caluclatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(caluclatedAnswer[1]);
}

function calculateCorrectAnswer(){
    let op1 = parseInt(document.getElementById("op1").innerText);
    let op2 = parseInt(document.getElementById("op2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+"){
        return [op1 + op2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

function incrementScore(){

    let oldScore = document.getElementById("score").innerText;
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer(){

    let oldScore = document.getElementById("incorrect").innerText;
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(op1, op2){
    document.getElementById("op1").textContent = op1;
    document.getElementById("op2").textContent = op2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}

function displayDivisionQuestion() {

}


