import {getPets} from './data/petData.js';
import {sortEvents} from './components/characters.js';

const initApp = () =>  {
    sortEvents();
    getPets();
};

initApp();