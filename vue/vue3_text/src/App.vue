<template>
  <div class="app">
    <h3>我是App组件（祖）</h3>
  </div>
</template>

<script>
import Child from './components/Child.vue'
import {ref, readonly, reactive, toRefs, provide, isRef, isReactive, isReadonly, isProxy} from 'vue'
export default {
  name:'App',
  components: {
    Child
  },
  setup() {
    let car = reactive({
      name: '奔驰',
      price: '40W'
    })

    let sum = ref(0)
    let car2 = readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))

    provide('car',car)  // 给自己的后代组件传递数据

    return {...toRefs(car)}
  }
}
</script>

<style>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>