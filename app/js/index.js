/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Spread opperator arrays');
/* coding examples */
const arrayOne = ["Maria", "Ana", "Alex"];
const arrayTwo = ["Said", "Ismael", "Pepe"];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name){
  log(name)
})

const name = 'Marian'
const nameToArray = [...name]
nameToArray.forEach(function(letter) {
  log(letter)
})

const addNumbers = function(n1, n2, n3) {
  return n1 + n2 + n3
}

const numbers = [1,5,9]
// const addition = addNumbers(numbers[0], numbers[1], numbers[2])
// Beter way to do this :
const addition = addNumbers(...numbers)
log(addition)
