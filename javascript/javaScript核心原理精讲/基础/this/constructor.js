function Person(name) {
  this.name = name
  this.sayName = function() {
    console.log(`my name is ${this.name}`)
  }
}

var name = 'dog'
const p = new Person('tiger')
p.sayName()