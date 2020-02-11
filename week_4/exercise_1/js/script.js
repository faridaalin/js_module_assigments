/*console.log('Hello world!');

const greeting = 'Hello there people';
const lengtjOfGreeting = greeting.length;
console.log('string chars:', lengtjOfGreeting);

const emptyString = '';
console.log('empty string:', emptyString.length);

const spaceTest = 'a b';
console.log('space: test', spaceTest.length);*/

/*const firstName = 'Farida ';
console.log('how many character:', firstName.length);

const trimmedName = firstName.trim();
console.log('remove spaces:', trimmedName.length);

space = ' ';
console.log('how many spaces:', space.length);
console.log('remove space ang get length:', space.trim().length)*/

const firstName = document.querySelector("#firstName");
firstName.addEventListener("keyup", logLength);

function logLength(event) {
  const inputValue = event.target.value.trim();
  const valueLength = inputValue.length;
  console.log(inputValue.length);

  if (valueLength > 0) {
    console.log("The input has a value");
  } else {
    console.log("The input has NOT a value");
  }
}


