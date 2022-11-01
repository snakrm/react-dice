

var player1 = "player1";
var player2 = "player2";
var score1 = 0;
var score2 = 0;

export function reset() {
  document.getElementById("btn1").disabled = false;
  document.querySelector(".img1").setAttribute("src","/dice1.jpeg");
  document.querySelector(".img2").setAttribute("src","/dice1.jpeg");
  document.getElementById("result").innerHTML = "Let's play";
  document.getElementById("score1").innerHTML = "score : 0";
  document.getElementById("score2").innerHTML = "score : 0";    

  score1 = 0;
  score2 = 0;
}

export function rollTheDice() {
  document.getElementById("result").innerHTML = "Just ROLL !!";
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector(".img1")
    .setAttribute("src", "/dice" + randomNumber1 + ".jpeg");

  document
    .querySelector(".img2")
    .setAttribute("src", "/dice" + randomNumber2 + ".jpeg");
 
   score1 = score1 + randomNumber1;
  document.getElementById("score1").innerHTML = "score : " + score1;

  score2 = score2 + randomNumber2;
  document.getElementById("score2").innerHTML = "score : " + score2;

  if (score1 >= 25 || score2 >= 25) {
    document.getElementById("btn1").disabled = true;
    if (score1 == score2) {
      document.getElementById("result").innerHTML = "Draw!";
    } else if (score1 < score2) {
      document.getElementById("result").innerHTML = player2 + " WINS!";
    } else {
      document.getElementById("result").innerHTML = player1 + " WINS!";
    }
  }
}
