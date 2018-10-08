// Import Functions //

import {getPets} from './data/petData.js';
import {sortEvents} from './helpers/events.js';

// Initialize App // 

const initApp = () =>  {
    sortEvents();
    getPets();
};

initApp();