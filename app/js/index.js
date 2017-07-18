/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Promises');
/* coding examples */

const promise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve("data back from the server")
  }, 3000)

  setTimeout(()=>{
    reject("no data back from the server, there was an error")
  }, 5000)
})

promise.then(res => {
  log(res)
}).catch(err => {
  log(err)
})
