/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Enchanced Object Properties');
/* coding examples */

const pricePropName = "PRICE"

const calculator = (name, price) => {
  return {
    name,
    add(n1, n2) {
      return n1 + n2
    },
    [pricePropName.toLowerCase()] : price
  }
}

const calc = calculator('casio', 19.90)
log(calc.name)
log(calc.add(10, 20))
log(calc.price)
