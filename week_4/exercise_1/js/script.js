/*
const greeting = "Hello there people";
const lengthOfGreeting = greeting.length;
console.log("string chars:", lengthOfGreeting);

const spaceTest = "ab";
console.log("spaceTest:", spaceTest.length);
*/

/*
const firstName = " Manny ";
console.log("how many chars?", firstName.length);

const trimmedName = firstName.trim();
console.log("remove spaces:", trimmedName.length);

const space = " ";
console.log("how many spaces:", space.length);
console.log("remove space and get length", space.trim().length);
*/

const firstName = document.querySelector("#firstName");

firstName.addEventListener("keyup", logLength);

function logLength(event) {
  const inputValue = event.target.value.trim();
  const valueLength = inputValue.length;
  console.log(inputValue.length);

  if (valueLength > 0) {
    console.log("The input has a value");
  } else {
    console.log("The input does not have a value");
  }
}
