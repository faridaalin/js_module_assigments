const apiUrl3 = 'https://api.rawg.io/api/games'
const wrapperDiv = document.querySelector('.wrapper');

let pageNumber = 2;
let pageSize = 26;

let genre = '';
const queryString = document.location.search; //&page=${pageNumber}&page_size=${pageSize}
const combineApiUrl = `${apiUrl3}${queryString}`;
let giveMeQueryStrings = new URLSearchParams(queryString);

console.log('A', giveMeQueryStrings.has('genre'))
console.log('B', giveMeQueryStrings.get('genre'))



if(giveMeQueryStrings.get('genre') !== null) {
    genre = giveMeQueryStrings.get('genre');
    console.log(genre)
}

let newUrl = `${apiUrl3}${genre}`

fetch(combineApiUrl)
  .then(function(response) {
    // console.log(response.status);
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("Ops..error happened!");
    }
  })
  .then(function(json) {
    const results = json;
    /*getName(results); //pass in results into function
    getImage(results);*/
  })
  .catch(function(error) {
    console.log(error);
  });

function getName(resultsArray) {
  // resultsArray is a parameter, waiting for and array to be passed in

  for (let i = 0; i < resultsArray.length; i++) {
    returnHTML = ``;
    let userFirstName = resultsArray[i].name.first;
    let userLastName = resultsArray[i].name.last;

    returnHTML += `${userFirstName} ${userLastName}`;
    let heading = document.createElement("h1");
    let addNameToFigure = wrapperDiv.appendChild(heading);
    addNameToFigure.innerHTML = returnHTML;
  }
}

function getImage(imagerray) {
  console.log(imagerray);

  for (let i = 0; i < imagerray.length; i++) {
    let returnHTML = ``;
    let photo = imagerray[i].picture.large;

    returnHTML += `<img src="${photo}" />`;

    let photoDiv = document.createElement("figure");
    let addPhotoToDiv = wrapperDiv.appendChild(photoDiv);
    addPhotoToDiv.innerHTML = returnHTML;

    photoDiv.after(heading);
  }
}

//querry string comes after the "?" in the URL



