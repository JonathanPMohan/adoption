import { printToDom } from "../helpers/util.js";


let pets = [];

const setPets = (newArray) => {
    pets = newArray;
}

const getPetz = () => {
    return pets;
};



const characterClick = (e) => {
    const characterID = e.target.closest('.character-card').id;
    const currentCharacter = characters.find(x => x.id === characterID);
    detailsBuilder(currentCharacter);
    console.log('currentCharacter', currentCharacter);
};

const createEvents = () => {
    const petCards = document.getElementsByClassName('pet-card');
    for(let i=0; i<petCards.length; i++) {
        petCards[i].addEventListener('click', characterClick);
    }
};

//  Sort Pets Function //

const sortPets = (e) => {
    const type = e.target.id;
    if(type === ''){
        petsBuilder(pets);
    } else {
    const filteredPets = pets.filter(x => x.type === type);
    petsBuilder(filteredPets);
    }
};

// Sort Events Function // 
const sortEvents = () => {
    const catsButton = document.getElementById('cats');
    const dogsButton = document.getElementById('dogs');
    const dinosButton = document.getElementById('dinos');
    const allButton = document.getElementById('all');
    catsButton.addEventListener('click', sortPets);
    dogsButton.addEventListener('click', sortPets);
    dinosButton.addEventListener('click', sortPets);
    allButton.addEventListener('click', sortPets);
};


const petsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pets) => {
        domString += `<div class="col-3 bg bg-none pet-card" id='${pets.name}'>`;
        domString +=    `<div class="card">`;
        domString +=        `<img class="card-img-top" img src="${pets.imageUrl}" alt="${pets.name}">`;
        domString +=        `<div class="card-body ">`;
        domString +=            `<h4 class="card-title">${pets.color}</h4>`;   
        domString +=                `<h4 class="card-title">${pets.specialSkill}</h4>`;
        domString +=                `<h4 class="card-title">${pets.type}</h4>`;
        domString +=        `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
    createEvents();
}

export{petsBuilder, setPets, getPetz, sortEvents};




