/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import { add, divide, PI } from './Maths';
logTitle('Names Exports / Imports');
/* coding examples */
log(add(2,2));
log(divide(2,2));
log(PI);
