/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Arrow Functions');
/* coding examples */

const hello = function() {
  const es6 = 'ES6';
  return `Hello ${es6}`;
};

const powers = [1,2,3,4,5].map(function(number, index) {
  return Math.pow(number, index);
});


const add = function(n1, n2) {
  return n1 + n2;
};

const milesToKm = function(miles) {
  return miles * 1.60934;
};

log(hello());
log(powers);
log(add(100,100));
log(milesToKm(100));
