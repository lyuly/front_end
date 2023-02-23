#!/usr/bin/env bun
"use strict";
function PersonC(p) {
    if (typeof p === 'object') {
        let ans = Math.floor(Math.random() * p.age);
        return ans;
    }
    else if (typeof p === 'number') {
        let ans = Math.floor(p / 13);
        return { p: ans, age: p };
    }
}
