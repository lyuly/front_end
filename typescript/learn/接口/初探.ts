#!/usr/bin/env bun

/* function printLabel(labelledObj: { label: string}) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "size 10 Object"};
printLabel(myObj); */

// 接口声明
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);