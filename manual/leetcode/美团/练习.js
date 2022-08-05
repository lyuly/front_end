#!/usr/bin/env bun
// const fs = require('fs');

// const lines = fs.readFileSync('test.txt', 'utf-8').toString().split(/\r\n|\r|\n/);

var b = 3;
(function(){
    b = 5;
    var b = 2;
})();
console.log(b);