
//selected value
var playerSelectedValue = document.getElementById('playerSelect');
var computerSelectedValue = document.getElementById('computerSelect');
//Score
var playerScore = document.getElementById('score1');
var ComputerScore = document.getElementById('score2');
// Score sum
var playerSum = 0;
var ComputerSum = 0;
//btn
var headBtn = document.getElementById('btn1');
var tailBtn = document.getElementById('btn2');

//arr for random selection
var arr = ["head", "tail"];

var winner = document.getElementById('winner');
var image = document.getElementById("image")


//head function
function head() {
    var randomRandomImage = arr[Math.floor(Math.random() * 2)];
    console.log("random selected value   " + randomRandomImage);
    if (randomRandomImage == 'head') {
        image.src = "img/head.jpg";
    }
    else {
        image.src = "img/tail.jpg";
    }
    var randomComputerSelect = arr[Math.floor(Math.random() * 2)];
    console.log("computer selected value   " + randomComputerSelect);
    if (randomRandomImage == randomComputerSelect) {
        ComputerSum = ComputerSum + 1;

    }
    if (randomRandomImage == "head") {
        playerSum += 1;
    }


    playerSelectedValue.innerHTML = "head";
    playerSelectedValue.style.color = "blue";
    playerSelectedValue.style.fontSize = "30px";

    computerSelectedValue.innerHTML = randomComputerSelect;
    computerSelectedValue.style.color = "green";
    computerSelectedValue.style.fontSize = "30px";
    playerScore.innerHTML = playerSum;
    playerScore.style.fontSize="25px"
    ComputerScore.innerHTML = ComputerSum;
    ComputerScore.style.fontSize="25px"

    if (playerSum == "5") {
        winner.innerHTML = "congratulations!!!You win this Game!"

    }
    if (ComputerSum == "5") {
        winner.innerHTML = "Computer win this Game!Try Again!!"

    }

}
headBtn.addEventListener('click', head);

//tail function
function tail() {

    var randomRandomImage = arr[Math.floor(Math.random() * 2)];
    console.log("random selected value   " + randomRandomImage);
    if (randomRandomImage == 'tail') {
        image.src = "img/tail.jpg";
    }
    else {
        image.src = "img/head.jpg";
    }
    var randomComputerSelect = arr[Math.floor(Math.random() * 2)];
    console.log("computer selected value   " + randomComputerSelect);
    if (randomRandomImage == randomComputerSelect) {
        ComputerSum = ComputerSum + 1;

    }
    if (randomRandomImage == "tail") {
        playerSum += 1;
    }


    playerSelectedValue.innerHTML = "tail";

    computerSelectedValue.innerHTML = randomComputerSelect;
    playerScore.innerHTML = playerSum;
    ComputerScore.innerHTML = ComputerSum;

    if (playerSum == "5") {
        winner.innerHTML = "congratulations!!!You win this Game!"

    }
    if (ComputerSum == "5") {
        winner.innerHTML = "Computer win this Game!Try Again!!"

    }

}
tailBtn.addEventListener('click', tail);