#!/usr/bin/env bun

/* 
keyof生成对象类型的字符串或数字联合
*/

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

export type Point = {x: number; y: number}
export type P = keyof Point // x | y

const todo: TodoPreview = {title: '吃饭', completed: false}
console.log(todo)

export type Grayish = { [n: number]: unknown}
export type A  = keyof Grayish // number