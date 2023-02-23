#!/usr/bin/env bun
"use strict";
class Greeter {
    greeting;
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
console.log(greeter.greet());
