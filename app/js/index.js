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

  static iAmAStaticMethod() {
    log("I am a static method of an Animal Class")
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

class Dog extends Animal{
  constructor(name, age, breed) {
    super(name, age)
    this.breed = breed
  }

  logBreed() {
    log(`${this.name} is a ${this.breed}`)
  }

  logAgeFromDog() {
    super.logAge()
  }
}

class Cat extends Animal{
  constructor(name, age) {
    super(name, age)
  }

  logAge() {
    log(this.age * 7)
  }

  logAgeFromCat() {
    super.logAge()
  }
}

Animal.iAmAStaticMethod()

const mike = new Dog("Mike", 4, "Bulldog")
mike.logBreed();
mike.logAgeFromDog();
mike.eat();
mike.sleep();

log("---------------")

const botas = new Cat("Botas", 1)
botas.logAge();
botas.logAgeFromCat();


// const bobby = new Animal("Bobby", 2);
// bobby.eat();
// bobby.sleep();
// bobby.logAge();
//
// log("---------------")
//
// const marshal = new Animal("Marshall", 3);
// marshal.eat();
// marshal.sleep();
// marshal.logAge();
