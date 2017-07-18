/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Const Keyword');
/* coding examples */
const person = {}
person['name'] = "Maria"

log(person.name)

const array = []
array.push("Maria from Array")

log(array[0])
