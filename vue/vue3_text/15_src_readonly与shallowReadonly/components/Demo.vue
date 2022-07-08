<template>
  <div>
    <h4>当前sum是：{{sum}}</h4>
    <button @click="sum++">点我++</button>
    <h4>当前的x值是：{{x.y}}</h4>
    <button @click="x++">点我x+1</button>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪水：{{job.j1.salary}}</h2>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">增加薪水</button>
  </div>
</template>

<script>
import {ref,toRef,toRefs,reactive, readonly, shallowReadonly, shallowReactive,shallowRef} from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    // let person = shallowReactive({ // 只考虑第一层数据的响应式
      let person = reactive({
      name:'张三',
      age:18,
      job:{
        j1:{
          salary:20
        }
      }
    })

    // person = readonly(person)
    person = shallowReadonly(person)

    // const x = toRef(person)

    let sum = ref(0)

    let x = ref({
      y:0
    })

    // 返回一个对象（常用）
    return {
      x,
      person,
      ...toRefs(person),
      sum
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary')
    }
  }
}
</script>