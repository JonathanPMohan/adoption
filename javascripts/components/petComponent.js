// Import Functions //
import { printToDom } from "../helpers/util.js";

// Set Function for Pets //

let pets = [];

const setPets = (newArray) => {
    pets = newArray;
}

// Return Function for Pets //

const getPetz = () => {
    return pets;
};

// To Use If We Add In A Pet Click Feature //

const petClick = (e) => {
    const petID = e.target.closest('.pet-card').id;
    const currentPet = characters.find(x => x.id === petID);
    detailsBuilder(currentPet);
    console.log('currentCharacter', currentCharacter);
};

// Event Listener to Create Pet Click (If Used) //

const createEvents = () => {
    const petCards = document.getElementsByClassName('pet-card');
    for(let i=0; i<petCards.length; i++) {
        petCards[i].addEventListener('click', petClick);
    }
};

// Function To Print Pet String //

const petsBuilder = (petsArray) => {
    let domString = '';
    petsArray.forEach((pets) => {
        domString +=    `<div class="card border-info mb-3 pet-card" style="max-width: 18rem;">`;
        domString +=        `<div class="card-header bg-secondary border-info">${pets.name}</div>`;
        domString +=            `<img class="card-img-top" img src="${pets.imageUrl}" alt="${pets.name}">`;
        domString +=               `<div class="card-body text-info">`;
        domString +=                 `<h4 class="pet-color">${pets.color}</h4>`;
        domString +=        `<p class="pet-skill">${pets.specialSkill}</p></div>`;
        domString +=    `<div class="card-footer" id="${pets.type}">${pets.type}</div>`;
        domString +=    `</div>`;
    });
    printToDom(domString);
    createEvents();
}

// Export Functions //

export{petsBuilder, setPets, pets, getPetz};
