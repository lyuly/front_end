/* function printLabel(labelledObj: { label: string}) {
  console.log(labelledObj.label);
}

let myObj = { size: 10, label: "size 10 Object"};
printLabel(myObj); */

// 接口声明
interface LabelledValue {
  label: string;
}

// 示例 a
// declare const myLabelledValue: { label: string }

declare const myLabelledValue: LabelledValue

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);