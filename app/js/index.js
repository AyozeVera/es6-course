/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Spread opperator objects');
/* coding examples */
const address = {
  city: 'LP',
  country: 'SP',
  postCode: '35110'
};

const name = {
  firstName: 'Juan',
  lastName: 'Palomo'
};

const person = {...address, ...name}

log(JSON.stringify(person, null, 2))
