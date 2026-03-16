let red = document.querySelector(".red");      // grab red light
let yellow = document.querySelector(".yellow"); // grab yellow light
let green = document.querySelector(".green");   // grab green light
let startButton = document.getElementById("start"); // grab start button

startButton.addEventListener("click", start); // make button respond to click

function start() {

    red.classList.add("active");

    setTimeout(() => {
        red.classList.remove("active");
        yellow.classList.add("active");
    }, 5000);

    setTimeout(() => {
        yellow.classList.remove("active");
        green.classList.add("active");
    }, 10000);

    setTimeout(() => {
        green.classList.remove("active");
        start(); // restart the traffic light cycle
    }, 20000);

}