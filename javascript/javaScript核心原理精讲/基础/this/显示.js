let girlName = {
  name: 'jevis',
  sayName: function() {
    console.log('my girl friend is ' + this.name)
  }
}

let girl1 = {
  name: 'joe'
}

let girl2 = {
  name: 'kko'
}

girlName.sayName.call(girl1)
girlName.sayName.call(girl2)

girlName.sayName.apply(girl1)