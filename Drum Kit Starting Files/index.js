//The below means that even if you click outside of the buttons (since it is outside of the divs), the eventlistener is still triggered.
// document.querySelector(".set").addEventListener("click", () => {
//     alert("I was clicked");
// });

//This uses a for each loop
// const selection = document.querySelectorAll(".drum");

// selection.forEach(btu => {
//     btu.addEventListener("click", handleClick);
// });

// function handleClick() {
//     alert("I was clicked!");
// }

//This uses a conditional and targets butttons inside a certain div only. See https://javascript.info/bubbling-and-capturing
const wrapper = document.querySelector(".set");

wrapper.addEventListener("click", (event) => {
    console.dir(event.target.nodeName);
});