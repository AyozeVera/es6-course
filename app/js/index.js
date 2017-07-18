/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Enchanced Object Properties');
/* coding examples */

const calculator = name => {
  return {
    name,
    add(n1, n2) {
      return n1 + n2
    }
  }
}

const calc = calculator('casio')
log(calc.name)
log(calc.add(10, 20))
