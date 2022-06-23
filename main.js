// The divs/squares that will change color
let outerColorSquare = document.getElementById("outer-color-square");
let innerColorSquare = document.getElementById("inner-color-square");

// Outer Color Preset Buttons
let outerRedButton = document.querySelector(".red-button");
let outerOrangeButton = document.querySelector(".orange-button");
let outerYellowButton = document.querySelector(".yellow-button");
let outerGreenButton = document.querySelector(".green-button");
let outerBlueButton = document.querySelector(".blue-button");
let outerPurpleButton = document.querySelector(".purple-button");

// Inner Color Preset Buttons
let innerRedButton = document.getElementsByClassName("red-button")[1];
let innerOrangeButton = document.getElementsByClassName("orange-button")[1];
let innerYellowButton = document.getElementsByClassName("yellow-button")[1];
let innerGreenButton = document.getElementsByClassName("green-button")[1];
let innerBlueButton = document.getElementsByClassName("blue-button")[1];
let innerPurpleButton = document.getElementsByClassName("purple-button")[1];

// Random Color Buttons
let outerRandomButton = document.getElementsByClassName("random-color-button")[0];
let innerRandomButton = document.getElementsByClassName("random-color-button")[1];

// Hex Code/Color Text Areas
let outerHexCodeChosen = document.getElementById("outer-hex-code-chosen");
let innerHexCodeChosen = document.getElementById("inner-hex-code-chosen");
let outerHexCodeRandom = document.getElementById("outer-hex-code-random");
let innerHexCodeRandom = document.getElementById("inner-hex-code-random");

// Input fields buttons
let enterOuterInput = document.getElementsByClassName("enter-input")[0];
let enterInnerInput = document.getElementsByClassName("enter-input")[1];

// RGB to Hex Code Function
function rgbToHex(r, g, b) {
    let fullHex = [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? "0" + hex : hex
    }).join("");
    return "#" + fullHex;
}

// Input fields buttons event listeners
enterOuterInput.addEventListener("click", outerInputColor);
enterInnerInput.addEventListener("click", innerInputColor);

// Functions to change the outer and inner square colors based on user input
function outerInputColor() {
    outerColorSquare.style.backgroundColor = outerHexCodeChosen.value;
}

function innerInputColor() {
    innerColorSquare.style.backgroundColor = innerHexCodeChosen.value;
}

// Outer Color Buttons Event Listeners
outerRedButton.addEventListener("click", outerButtonClick("#ff0000"));
outerOrangeButton.addEventListener("click", outerButtonClick("#ffa500"));
outerYellowButton.addEventListener("click", outerButtonClick("#ffff00"));
outerGreenButton.addEventListener("click", outerButtonClick("#008000"));
outerBlueButton.addEventListener("click", outerButtonClick("#0000ff"));
outerPurpleButton.addEventListener("click", outerButtonClick("#800080"));

// Outer Color Buttons function to change the color of the outer square to a preset color
function outerButtonClick(color) {
    return function() {
        outerColorSquare.style.backgroundColor = color;
        outerHexCodeChosen.value = color;
    }
}

// Inner Color Buttons Event Listeners
innerRedButton.addEventListener("click", innerButtonClick("#ff0000"));
innerOrangeButton.addEventListener("click", innerButtonClick("#ffa500"));
innerYellowButton.addEventListener("click", innerButtonClick("#ffff00"));
innerGreenButton.addEventListener("click", innerButtonClick("#008000"));
innerBlueButton.addEventListener("click", innerButtonClick("#0000ff"));
innerPurpleButton.addEventListener("click", innerButtonClick("#800080"));

// Inner Color Buttons function to change the color of the inner square to a preset color
function innerButtonClick(color) {
    return function () {
        innerColorSquare.style.backgroundColor = color;
        innerHexCodeChosen.value = color;
    }
}

// Event Listeners for the Random buttons
outerRandomButton.addEventListener("click", outerRandomButtonClick);
innerRandomButton.addEventListener("click", innerRandomButtonClick);

// Outer Random Button function to change the color of the outer square to a random color
function outerRandomButtonClick() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * 256));
    }
    let hex = rgbToHex(...rgb);
    outerColorSquare.style.backgroundColor = hex;
    outerHexCodeRandom.innerText = hex;
}

// Inner Random Button function to change the color of the inner square to a random color
function innerRandomButtonClick() {
    let rgb = [];
    for (let i = 0; i < 3; i++) {
        rgb.push(Math.floor(Math.random() * 256));
    }
    let hex = rgbToHex(...rgb);
    innerColorSquare.style.backgroundColor = hex;
    innerHexCodeRandom.innerText = hex;
}