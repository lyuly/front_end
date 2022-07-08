<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import {h} from 'vue'
export default {
  name:'App',
  // 此处只是测试一些setup，暂时不考虑响应式的问题
  // 数据、方法要配置在setup中
  setup(){
    const name = '张三'
    const age = 18

    // 方法
    function sayHello(){
      alert(`我叫${name}，我${age}岁了，你好啊！`)
    }


    // 返回一个对象（常用）
    return {
      name,
      age,
      n,
      sayHello
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','尚硅谷')
  }
}
</script>