<template>
  <div>
    <AInput type="text" v-model:value="name" placeholder="请输入姓名" style="width: 150px;"/>
    <br>
    <AInput type="text" v-model:value="age" placeholder="请输入年龄" style="width: 150px;"/>
    <br>
    <AInput type="text" v-model:value="day.job" placeholder="请输入薪水" style="width: 150px;"/>
    <br>
    <p>姓名：{{name}}</p>
    <p>年龄：{{age}}</p>
    <p>薪水：{{day.job}}</p>
    <br>
    <AButton @click="add">{{count}}</AButton>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, watch, watchEffect } from 'vue'
import { Button, Input } from 'ant-design-vue'

export default defineComponent({
  name: 'home-item',
  components: {
    AInput: Input,
    AButton: Button
  },
  setup (props, contenxt) {
    const person = reactive({
      name: '',
      age: undefined,
      day: {
        job: undefined
      }
    })

    const count = ref(0)

    const add = () => {
      return count.value++
    }

    /* watchEffect(() => {
      console.log(person)
    }) */

    /* watch(
      () => person.day,
      (newVal, oldVal) => {
        console.log('day变化了', newVal, oldVal)
      }, { deep: true }
    ) */

    watch(count, (newVal, oldVal) => {
      console.log(`旧 ${oldVal},新 ${newVal}`)
    })

    /* watch([() => person.name, () => person.age], (newVal, oldVal) => {
      console.log(`旧${oldVal},新${newVal}`)
    }) */

    /* watch(
      () => person.name,
      (newVal, oldVal) => {
        console.log(`旧${oldVal},新${newVal}`)
      }
    ) */
    return {
      ...toRefs(person),
      count,
      add
    }
  }
})
</script>

<style>

</style>
