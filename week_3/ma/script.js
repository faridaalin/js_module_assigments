console.log("JS MA3");
// Q1
let subtract = (a, b) => {
  return a - b;
};

subtract(100, 1);

// Q2
const apiUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(apiUrl)
  .then(response => {
    return response.json();
  })
  .then(json => {
    printGameNames(json);
  })
  .catch(error => {
    document.location.href = "error.html";
  });

function printGameNames(json) {
  const gamesArray = json.results;
  for (let i = 0; i < gamesArray.length; i++) {
    // console.log(gamesArray[i].name);
  }
}

// Q3
let mySentence = "These cats are outrageous";
let filteredSentence = mySentence.replace("cats", "giraffes");
//console.log("🚀", filteredSentence);

// Q4
// const queryString = document.location.search; // https://my.site.com?userId=7
const queryString = "https://my.site.com?userId=7"; // https://my.site.com?userId=7
const params = new URLSearchParams(queryString);

console.log(params.get("userId"));

if (!params.has("userId")) {
  console.log("No user ID");
  // document.location.href = "third.html";
} else if (params.get("userId") < 10) {
  console.log("Has user ID");
  // document.location.href = "first.html";
} else {
  console.log("second page.");
  // document.location.href = "second.html";
}

// Q5
const containerDiv = document.querySelector(".container");
const button = document.querySelector(".btn");
containerDiv.removeChild(button);


// Q6
const animalsList = document.querySelector(".animals");
const elephants = document.querySelector(".elephants");
const listItem = document.createElement("li");

listItem.innerHTML = "Manny";
listItem.className = "hey";
animalsList.appendChild(listItem);
elephants.before(listItem);


// Q7
const baseUrl = "https://api.rawg.io/api/";
const endPoint = "games/"
const gamesId = "3801"


fetch(`${baseUrl}${endPoint}${gamesId}`)
  .then(response => {
    return response.json();
  })
  .then(json => {
    console.log(json);
    let ratingDiv = document.querySelector(".rating");
    ratingDiv.innerText = json.rating;
  })
  .catch(error => {
    console.log(error);
  });
