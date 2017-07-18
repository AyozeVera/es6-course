/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Lexical This');
/* coding examples */
const person = {
  name: 'Alex',
  cars: ['Ferrary', 'Lambo'],
  toString: function() {
    // log(`${this.name} has ${this.cars}`)
    this.cars.forEach(car => {
      log(`${this.name} has ${car}`)
    })
  }
}

person.toString();
