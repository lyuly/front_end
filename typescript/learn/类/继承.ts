#!/usr/bin/env bun

// 使用继承来扩展现有的类

/* class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark(); */

/* class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
} */

class Person {
  name: string;
  
  constructor(theName: string) {
    this.name = theName;
  }

  eat(food: number = 0) {
    console.log(`eat ${food} food`);
  }
}

class School extends Person {
  age: number;
  sex: string;

  constructor(name: string, age: number, sex: string) {
    super(name);
    this.age = age;
    this.sex = sex;
  }

  eat(food = 3) {
    super.eat(food);
  }

  sleep() {
    console.log('now sleep');
  }
}

const p = new School('pig', 1, '男');
p.eat()
p.sleep();