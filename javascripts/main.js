import {getPets} from './data/petData.js';
import {sortEvents} from './components/petComponent.js';

const initApp = () =>  {
    sortEvents();
    getPets();
};

initApp();