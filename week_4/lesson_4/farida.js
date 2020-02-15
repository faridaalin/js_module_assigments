//Question 1

const cars = [
    {
        type: "BMW",
        age: 4,
        beenInAccident: false
    },
    {
        type: "Toyota",
        beenInAccident: true
    },
    {
        type: "Ford",
        beenInAccident: true
    }
];

/*for (let i = 0; i < cars.length; i++) {
    const age = cars[i].age;
    
    if(typeof age === 'number') {
        console.log('car age is:', age)
    } else {
        console.log('Unknown')
    }
}*/

cars.forEach(car => {
    let carAge = 'Unknown age';

    if(car.age) {
        carAge = car.age;
    } 
    console.log(carAge);
    }
);


//Question 2
const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: "Given to a Carolingian emperor." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "From the Mysore Dasara procession." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "Known for her tightrope walking act." }
];

function elephantsFunction(elephants) {
    let html = '';
    
    elephants.forEach(elephant => {
        html += `<img src='${elephant.image}' alt='${elephant.note}'>`
    });

    return html;
}
const hmlObj = elephantsFunction(elephants);
console.log(hmlObj)

//Question 3
const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: null},
    { note: "From the Mysore Dasara procession." },
    { image: null, note: "Known for her tightrope walking act." }
];

