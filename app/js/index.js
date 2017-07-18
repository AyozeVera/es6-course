/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Generators');
/* coding examples */

const getNumbers = function* () {
  yield 1;
  yield "Hello";
  yield true;
  yield {name: 'Alex'};
  return "I am done"
}

const numbersGen = getNumbers();

log(numbersGen.next().value);
log(numbersGen.next().value);
log(numbersGen.next().value);
log(JSON.stringify(numbersGen.next().value));
log(numbersGen.next().value);
