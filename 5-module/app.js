/**
 *  Using module import and exports that are provided by Javascript
 *  Add "type": "module" in package.json
 */

// import { increase, getCount } from './counter.js';
// increase();
// increase();
// increase();
// console.log(getCount());

import * as counter from './counter.js';

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
