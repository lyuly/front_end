#!/usr/bin/env bun
"use strict";
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
class PersonX {
    name;
    constructor(theName) {
        this.name = theName;
    }
    eat(food = 0) {
        console.log(`eat ${food} food`);
    }
}
class SchoolX extends PersonX {
    age;
    sex;
    constructor(name, age, sex) {
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
const p = new SchoolX('pig', 1, '男');
p.eat();
p.sleep();
