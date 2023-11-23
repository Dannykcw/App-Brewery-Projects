let randomNum1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let randomNum2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNum1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNum2 + ".png");

if (randomNum1 > randomNum2) {
    document.body.querySelector("h1").textContent = "🚩Player 1 wins!";
} else if (randomNum2 > randomNum1) {
    document.body.querySelector("h1").textContent = "Player 2 wins!🚩";
} else {
    document.body.querySelector("h1").textContent = "Call it even!";
}
