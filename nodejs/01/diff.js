#!/usr/bin/env node

/* 
module.exports通杀函数、数组等等
exports只支持导出键值对
*/

const c = 1

module.exports = {
  add: function add(a, b) {
    return a + b
  }
}

exports.c = c