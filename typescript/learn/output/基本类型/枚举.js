"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
var Word;
(function (Word) {
    Word[Word["A"] = 1] = "A";
    Word[Word["B"] = 2] = "B";
    Word[Word["C"] = 3] = "C";
})(Word || (Word = {}));
let wordName = Word[2];
console.log(Word[3]);
