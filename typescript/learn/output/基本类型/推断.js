"use strict";
function strEnum(o) {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}
const Directionx = strEnum(['North', 'South', 'East', 'West']);
let example;
example = Directionx.North;
example = 'North';
// example = 'okk' error
