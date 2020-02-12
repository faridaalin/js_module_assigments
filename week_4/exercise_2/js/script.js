const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto/';
const apiUrl2 = 'https://randomuser.me/api/';


const wrapperDiv = document.querySelector('.wrapper')



fetch(apiUrl2)
    .then(function(response) {
        // console.log(response.status);
        if(response.status === 200){
            return response.json();
        } else {
            console.log('Ops..error happened!')
        }
})
.then(function(json) {
    const results = json.results;
    getName(results) //pass in results into function
    getImage(results)
})
.catch(function(error) {
    console.log(error)
});

function getName(resultsArray) { // resultsArray is a parameter, waiting for and array to be passed in
    
    for(let i = 0; i < resultsArray.length; i++) {
        returnHTML = ``;

        let userFirstName = resultsArray[i].name.first;
        let userLastName = resultsArray[i].name.last;

        returnHTML += `<h1>${userFirstName} ${userLastName}</h1>`
        let heading = document.createElement('h1');
        let addNameToFigure = wrapperDiv.appendChild(heading);
        addNameToFigure.innerHTML = returnHTML; 

        photoDiv.after(addNameToFigure);
        
    }
}

function getImage(imagerray) {
    console.log(imagerray);

    for(let i = 0; i < imagerray.length; i++) {
        let returnHTML = ``;
        let photo = imagerray[i].picture.large;
       
        returnHTML += `<img src="${photo}" />`;

        let photoDiv = document.createElement('figure');
        let addPhotoToDiv = wrapperDiv.appendChild(photoDiv)
        addPhotoToDiv.innerHTML = returnHTML;

        photoDiv.after(heading)

    }
 
}



















/*

function loopTroughCarousel(json) {
  const screenshots = json.results;
 
  for (let i = 0; i < screenshots.length; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", screenshots[i].image);
    img.classList.add("d-block", "w-100");

    const div = document.createElement("div");
    div.classList.add("carousel-item");
    if (i === 0) {
      div.classList.add("active");
    }

    div.appendChild(img);
    carouselInner.appendChild(div);
  }
}
 
}*/


