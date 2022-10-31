let a = {
  name: 'li',
  age: 20
}

function change(o) {
  o.age = 24
  o = {
    name: 'kkk',
    age: 30
  }
  return o
}

let b = change(a)
console.log(b.age)
console.log(a.age)