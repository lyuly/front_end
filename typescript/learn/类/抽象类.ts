#!/usr/bin/env ts-node

/* 
abstract 抽象类
作用是作为实现所有抽象成员的子类的基类。
*/

abstract class Department {
  constructor(public name: string) {

  }

  printName(): void {
    console.log('Department name: ' + this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing');
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department;
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports();