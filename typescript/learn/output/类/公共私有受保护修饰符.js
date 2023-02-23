#!/usr/bin/env bun
"use strict";
class AnimalY {
    name;
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class School {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const jlu = new School('jlu');
console.log(jlu.getName());
jlu.setName('nju');
console.log(jlu.getName());
class PersonY {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee extends PersonY {
    department;
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employee("howard", 'Sales');
console.log(howard.getElevatorPitch());
// console.log(howard.name);
