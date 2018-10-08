// Import Functions //

import {setPets, petsBuilder, getPetz} from '../components/petComponent.js';

// JSON //

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    petsBuilder(getPetz());
}

// If XHR Fails //

function ececuteThisCodeIfXhrFails () {
    console.log('things be broke');
}

// XML Request //

const getPets = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', ececuteThisCodeIfXhrFails);
    myRequest.open('GET', './db/pets.json');
    myRequest.send();
};

// Export Functions //

export{getPets};
