/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Template literals');
/* coding examples */
const name = "Anna"
const country = "Spain"
const age = 30

log("Name: " + name + " Country: " + country + " Age: " + age);
log(`Name: ${name} Country: ${country} Age: ${age}`);
