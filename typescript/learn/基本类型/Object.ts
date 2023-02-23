interface Person {
  name: string;
  age: number;
  sex?: string;
}

const obj1: Person = {
  name: 'nnn',
  age: 18
}

console.log(obj1.name);
console.log(obj1['name']);

let key: keyof Person;

for (key in obj1) {
  if (Object.prototype.hasOwnProperty.call(obj1, key)) {
    const element = obj1[key];
    console.log(element);
  }
}