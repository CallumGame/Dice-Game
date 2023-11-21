var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);

var images = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'];
var randomImage = images[randomNumber1];

document.getElementById("img1").setAttribute("src", "images/" + randomImage);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);

var images2 = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'];
var randomImage2 = images2[randomNumber2];

document.getElementById("img2").setAttribute("src", "images/" + randomImage2)


function winner(){
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player One Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player Two Wins!";
}
else
    document.querySelector("h1").innerHTML = "Draw Play Again";

}

winner();
