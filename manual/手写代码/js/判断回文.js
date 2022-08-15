#!/usr/bin/env node

function judge(s) {
  if (s.length === 0)
    return
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] !== s[j])
      return false;
    i++;
    j--;
  }
  return true;
}

module.exports = judge;