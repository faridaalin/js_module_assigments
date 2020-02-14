console.log("hello world");

/*function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(anotherFunction) {
  let name = prompt("Hello there");
  anotherFunction(name);
}

processUserInput(greeting);
*/




// function declaration
function printName1() { // named function
  console.log("Manny");
}

// function expression also
let printName2 = function printName2() { // named function
  console.log("Sally");
}

// function expression
let printName3 = function() { // anonymous function
  console.log("John");
}


console.log(notHoisted);

notHoisted();

const notHoisted = function() {
  console.log("helloooooo")
}

setTimeout(printName1, 2000);
setTimeout(printName2, 4000);
setTimeout(printName3, 6000);
















/*
function getResponse(response) {
    return response.json()
}

function useJson(json) {
  let myData = json.results;
  console.log(myData);
  return myData;
}

function showError(error) {
  console.log(error);
}

fetch("https://api.rawg.io/api/creators")
  .then(getResponse)
  .then(useJson)
  .catch(showError)*/