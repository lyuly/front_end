<template>
  <div>
    <hr>
    <h1>一个人的信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="test1">测试触发一个Demo组件的Hello事件</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'Demo',
  props:['msg', 'school'],
  emits:['hello'],
  /* beforeCreate() {
    console.log('---beforeCreate---')
  }, */
  setup(props, context) {
    // console.log('---setup---',props)
    // console.log('---setup---',context.attrs) // 详单与vue2中的$attrs
    // console.log('---setup---', context.emit) // 触发自定义事件的
    console.log('---setup---', context.slots) // 插槽
    // 数据
    let person = reactive({
      name: '张三',
      age: 19
    })

    function test1() {
      context.emit('hello', 666)
    }

    // 返回一个对象（常用）
    return {
      person,
      test1
    }
  }
}
</script>

<style>
  
</style>