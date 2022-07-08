<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>职位：{{person.job.type}}</h2>
  <h2>薪水：{{person.job.salary}}</h2>
  <h2 v-show="person.sex">性别：{{person.sex}}</h2>
  <button @click="sayHello">说话</button>
  <button @click="changeInfo">修改人的信息</button>
  <button @click="addSex">添加一个sex属性</button>
  <button @click="deleteName">删除一个name属性</button>
</template>

<script>
import {h, ref, reactive} from 'vue'
export default {
  name:'App',
  // 此处只是测试一些setup，暂时不考虑响应式的问题
  setup(props){

    let person = reactive({
      name: '张三',
      age: 19,
      job: {
        type: '前端工程师',
        salary: '30K'
      }
    })

    // 方法
    function sayHello(){
      alert(`我叫${preson.name}，我${preson.age}岁了，你好啊！`)
    }

    function changeInfo() {
      person.name = '李四'
      person.age = 48
      person.job.type = 'ui设计师'
      person.job.salary = '60K'
    }

    function addSex() {
      person.sex = '男'
    }

    function deleteName() {
      delete person.name
    }

    // 返回一个对象（常用）
    return {
      person,
      sayHello,
      changeInfo,
      addSex,
      deleteName
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','尚硅谷')
  }
}
</script>