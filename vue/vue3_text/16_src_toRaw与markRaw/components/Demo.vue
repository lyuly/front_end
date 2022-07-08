<template>
  <div>
    <h4>当前sum是：{{sum}}</h4>
    <button @click="sum++">点我++</button>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪水：{{job.j1.salary}}</h2>
    <h3>座驾信息{{person.car}}</h3>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增加薪水</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人添加一个车</button>
    <button @click="person.car.name+='!'">换车名</button>
    <button @click="person.car.price++">换价格</button>
  </div>
</template>

<script>
import {ref,toRefs,reactive, toRaw, markRaw} from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let person = reactive({
    name:'张三',
    age:18,
    job:{
      j1:{
        salary:20
      }
    }
  })

    function showRawPerson() {
      const p = toRaw(person)
      console.log(p)
    }

    function addCar() {
      let car = {name: '奔驰', price: 40}
      person.car = markRaw(car)
    }

    // 返回一个对象（常用）
    return {
      ...toRefs(person),
      person,
      sum,
      showRawPerson,
      addCar
    }
  }
}
</script>