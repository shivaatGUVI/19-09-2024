// console.log("Hello");

// I want a button to be there, but you cannot create it in HTML, I want to create the button element using JavaScript only.

// - button element
/**
 * 1. Button element (<button>Click me</button>).
 * 2. I need some interface (DOM) to push/add this button to HTML.
 * 3. I need reference to where to push this button.
 */

// document
// 1. document.getElementByTagName("body")
// 2. document.querySelector("body")
//  Document Object Model

// let buttonElement = document.createElement("button");
// buttonElement.innerText = "Click me";

// let reference = document.querySelector("body");
// console.log(reference);

// console.log(buttonElement);

// reference.appendChild(buttonElement);

let buttonRef = document.getElementById("btn");

// Event type, event target, action

// function consoleObject(whatever) {
//   console.log(whatever);
// }

// let object = {
//   name: "GUVI",
//   city: "Chennai",
// };

// consoleObject(object);

// click me -> clicked

buttonRef.addEventListener("click", function abc(event) {
  // best practices -> event / e
  // event -> target property (the information of element upon which this event happened)

  let eventTarget = event.target;
  eventTarget.innerText = "Clicked";

  //   buttonRef.innerText = "Clicked";

  console.log("Clicked");
  console.log(event);
});

// let eventObject = {
//   keyOne: "ValueOne",
//   keyTwo: false,
//   target: {
//     keyOne: "ValueOne",
//     keyTwo: false,
//     innerText: "initial state",
//   },
// };

let inputRef = document.getElementById("input");
let output = document.getElementById("output");

inputRef.addEventListener("input", (event) => {
  console.log(event);
  //   let typedCharacter = event.data; // the input that is provided by the user by doing input event

  let typedCharacter = event.target.value;
  output.innerText = typedCharacter;
});

// console.log(inputRef.placeholder);
