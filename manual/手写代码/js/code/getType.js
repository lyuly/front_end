#!/usr/bin/env bun

function getType(obj) {
  if (obj === null)
    return obj + '';
  // 判断是引用类型
  if (typeof obj === 'object') {
    let value = Object.prototype.toString.call(obj);
    let type = value.split(' ')[1].replace(/\]/, '');
    return type.toLowerCase();
  } else {
    return typeof obj;
  }
}