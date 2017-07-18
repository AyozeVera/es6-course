/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Promises');
/* coding examples */

const namesPromise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(["Ana", "Jhon", "Ali"])
  }, 3000)

  setTimeout(()=>{
    reject("no data back from the server, there was an error")
  }, 5000)
})
const surnamesPromise = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(["Williams", "Snow", "Mohamed"])
  }, 3000)

  setTimeout(()=>{
    reject("no data back from the server, there was an error")
  }, 5000)
})

Promise.all([namesPromise, surnamesPromise]).then(data => {
  const [names, surnames] = data;
  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    const surname = surnames[i]
    log(`${name} ${surname}`)
  }
}).catch(err => {
  log(err)
})
