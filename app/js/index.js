/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('ES6 Classes');
/* coding examples */

class Animal {
  constructor(name, age) {
    log(`${name} is an animal and was created`)
    this.name = name;
    this.age = age;
  }

  eat() {
    log(`${this.name} is eating`);
  }

  sleep() {
    log(`${this.name} is sleeping`);
  }

  logAge() {
    log(`${this.name} is ${this.age} years old`);
  }
}

const bobby = new Animal("Bobby", 2);
bobby.eat();
bobby.sleep();
bobby.logAge();

log("---------------")

const marshal = new Animal("Marshall", 3);
marshal.eat();
marshal.sleep();
marshal.logAge();
