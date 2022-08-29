#!/usr/bin/env bun

class Animal {
  public name: string;
  
  public constructor(theName: string) {
    this.name = theName;
  }
  
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class School {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
    
}

const jlu = new School('jlu');
console.log(jlu.getName());

jlu.setName('nju');
console.log(jlu.getName());

class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name)
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("howard", 'Sales');
console.log(howard.getElevatorPitch());
console.log(howard.name);