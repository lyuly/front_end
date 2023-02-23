"use strict";
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) { }
    tick1() {
        throw new Error("Method not implemented.");
    }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) { }
    tick1() {
        throw new Error("Method not implemented.");
    }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
