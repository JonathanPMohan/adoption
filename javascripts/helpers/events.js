// Import Functions //

import { petsBuilder, pets } from "../components/petComponent.js";

// Sort Pets Function //

const sortPets = (e) => {
    const type = e.target.id;
    if(type === 'all'){
        petsBuilder(pets);
    } else {
    const filteredPets = pets.filter(x => x.type === type);
    petsBuilder(filteredPets);
    }
};


// Sort Events Function // 

const sortEvents = () => {
    const catsButton = document.getElementById('cat');
    const dogsButton = document.getElementById('dog');
    const dinosButton = document.getElementById('dino');
    const allButton = document.getElementById('all');
    catsButton.addEventListener('click', sortPets);
    dogsButton.addEventListener('click', sortPets);
    dinosButton.addEventListener('click', sortPets);
    allButton.addEventListener('click', sortPets);
};

// Export Functions //

export{sortEvents};
