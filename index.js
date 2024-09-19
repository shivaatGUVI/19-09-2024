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

// let buttonRef = document.getElementById("btn");

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

// buttonRef.addEventListener("click", function abc(event) {
//   // best practices -> event / e
//   // event -> target property (the information of element upon which this event happened)

//   let eventTarget = event.target;
//   eventTarget.innerText = "Clicked";

//   //   buttonRef.innerText = "Clicked";

//   console.log("Clicked");
//   console.log(event);
// });

// let eventObject = {
//   keyOne: "ValueOne",
//   keyTwo: false,
//   target: {
//     keyOne: "ValueOne",
//     keyTwo: false,
//     innerText: "initial state",
//   },
// };

// let inputRef = document.getElementById("input");
// let output = document.getElementById("output");

// inputRef.addEventListener("input", (event) => {
//   console.log(event);
//   //   let typedCharacter = event.data; // the input that is provided by the user by doing input event

//   let typedCharacter = event.target.value;
//   output.innerText = typedCharacter;
// });

// function clickHandler(event) {
//   console.log(event);
//   event.preventDefault();
//   console.log(event.target.localName + " clicked");
//   console.log("Inside click handler", event);
// }

// let aTagRef = document.querySelector("a");
// aTagRef.addEventListener("click", clickHandler);

// let formElement = document.querySelector("form");
// formElement.addEventListener("submit", clickHandler);

/**
 * Problem statement
 *
 * 1. Input element <input type="text" placeholder="Type something" value="good morning"/>
 * 2. Button element
 * 3. After typing into the input element and clicking on the button I want to show the output in the console
 *
 *
 */

let container = document.getElementById("container");

let inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("placeholder", "Type something");
inputElement.setAttribute("value", "Good morning");

let buttonElement = document.createElement("button");
buttonElement.innerText = "Submit";

// append, appendChild

container.append(inputElement, buttonElement);

// let inputValue = ""; // assigning an empty value

function clickHandler(event) {
  console.log(event);
  let inputElement = event.target.previousSibling;

  let containerElement = event.target.parentElement;

  // let window = event.view;

  window.open("https://facebook.com");

  containerElement.style.border = "1px solid black";
  containerElement.style.padding = "2rem";

  // console.log(inputElement);
  // console.log(event);
  console.log(inputElement.value);
  console.log(containerElement);
}

// function inputHandler(event) {
//   // event.target.value -> the value of the input element
//   // inputValue = event.target.value;
// }

// inputElement.addEventListener("input", inputHandler);
buttonElement.addEventListener("click", clickHandler);
