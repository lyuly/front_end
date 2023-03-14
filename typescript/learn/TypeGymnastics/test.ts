#!/usr/bin/env bun

class Dog {
  static bark() {
    console.log(this)
  }

  bark() {
    console.log('bark')
  }
}

const dog = new Dog()
dog.bark()

export type Person = {
  [key: number]: boolean
}

const p: Person = [true, false, true]
console.log(typeof p)

loop:

for (let i = 0; i < 10; i++) {
  console.log(i)
  if (i === 4) {
    break loop
  }
}

export type TupleToObject<T extends any[]> = {[k in T[number]]: T[k]}

type error =  TupleToObject<[[1, 2, 3], {}]>
