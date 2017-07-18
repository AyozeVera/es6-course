/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Generators');
/* coding examples */

const getNumbers = function* (numbers) {
  for (var i = 0; i < numbers.length; i++) {
    yield numbers[i]
  }
}

const getNumbersGen = getNumbers([1,2,3,4,5])

const interval = setInterval(() => {
  const next = getNumbersGen.next();
  if (next.done) {
    log("This generator is done")
    clearInterval(interval)
  } else {
    const number = next.value
    log(number)
  }

}, 1000)
