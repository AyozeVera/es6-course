/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from './Animal'
logTitle('Names Exports / Imports');
/* coding examples */
var animal = new Animal();
log(animal.getClassType());
