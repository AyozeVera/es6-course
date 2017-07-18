/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import * as Math from './Maths';
logTitle('Names Exports / Imports');
/* coding examples */
log(Math.add(2,2));
log(Math.substract(2,2));
log(Math.divide(2,2));
log(Math.multiply(2,2));
log(Math.PI);
