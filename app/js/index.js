/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Function Default Parameters');
/* coding examples */

const calculatePay = (yearSalary, bonus = 0) => yearSalary + bonus;
log(calculatePay(22000, 10))
