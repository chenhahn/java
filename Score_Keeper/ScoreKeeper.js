let button1 = document.querySelector("#p1");
let button2 = document.getElementById("p2");
let button3 = document.getElementById("reset");
let p1Display = document.querySelector("#p1score");
let p2Display = document.querySelector("#p2score");
let numInput = document.querySelector("input[type='number']");
let winnerScoreDisplay = document.querySelector("p span");
let p1 = {
  score: 0
};
let p2 = {
  score: 0
};
let gameOver = false;
let winningScore = 5;

button1.addEventListener("click", function () {
  addScore(p1, p1Display);
},false);

button2.addEventListener("click", function () {
  addScore(p2, p2Display);
},false);

button3.addEventListener("click", reset);

function addScore(player, display){
  if(!gameOver) {
    player.score++;
    if(player.score === winningScore){
      display.classList.add("winner");
      console.log("Game Over!!");
      gameOver = true;
    }
    display.textContent = ""+player.score;
  }
}

function reset() {
  p1.score = 0;
  p2.score = 0;
  gameOver = false;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  p1Display.textContent = ""+p1.score;
  p2Display.textContent = ""+p2.score;

}

numInput.addEventListener("change", function () {
  winningScore = Number(this.value);
  winnerScoreDisplay.textContent = ""+winningScore;
  reset();
});
