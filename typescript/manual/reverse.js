"use strict";
function reverse(s) {
    if (s.length === 0)
        return s;
    const str = [...s];
    let l = 0, r = s.length - 1;
    while (l < r) {
        let t = str[l];
        str[l] = str[r];
        str[r] = t;
        ++l;
        --r;
    }
    return str.join('');
}
console.log(reverse('word'));
