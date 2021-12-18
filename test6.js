const colors = [
    "#ef5777",
    "#575fcf",
    "#ff3f34"
];
const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", handleColor);

function handleColor(event) {
    const firstRand = colors[Math.floor(Math.random() * colors.length)];
    const secondRand = colors[Math.floor(Math.random() * colors.length)];
    if (firstRand === secondRand) {
        handleColor();
        console.log(firstRand, secondRand)
    } else {
        body.style.background = `linear-gradient(${firstRand}, ${secondRand})`;
        console.log(firstRand, secondRand)
    }
}