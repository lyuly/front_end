#!/usr/bin/env bun
"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["UpX"] = 1] = "UpX";
    Direction[Direction["DownX"] = 2] = "DownX";
    Direction[Direction["LeftX"] = 3] = "LeftX";
    Direction[Direction["RightX"] = 4] = "RightX";
})(Direction || (Direction = {}));
console.log(`Up: ${Direction.UpX} Down: ${Direction.DownX} Left: ${Direction.LeftX} Right: ${Direction.RightX}`);
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
function respond(recipient, message) {
}
respond('Wa, Wa, Wa', Answer.Yes);
