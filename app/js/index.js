/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Promises & Fetch API');
/* coding examples */

const getRandomUsers = n => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
  fetchRandomUsers.then(response => {
    response.json().then(randomUsers => {
      randomUsers.results.forEach(user => {
        const {gender, email} = user;
        log(`${gender} - ${email}`)
      })
    })
  })
}

getRandomUsers(10);
