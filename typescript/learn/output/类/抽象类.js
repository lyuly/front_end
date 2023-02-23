#!/usr/bin/env bun
"use strict";
class Department {
    name;
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log('Department name: ' + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }
    printMeeting() {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports() {
        console.log('Generating accounting reports...');
    }
}
let department;
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// department.generateReports();
