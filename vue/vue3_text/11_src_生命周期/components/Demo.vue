<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
  </div>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
  
    // 通过组合式API的形式去使用生命周期钩子
    onBeforeMount(() => {
      console.log('---onBeforeMount---')
    })

    onMounted(() => {
      console.log('---onMount---')
    })

    onBeforeUpdate(() => {
      console.log('---onBeforeUpdate---')
    })

    onUpdated(() => {
      console.log('---onUpdated---')
    })

    onBeforeUnmount(() => {
      console.log('---onBeforeUnmount---')
    })

    onUnmounted(() => {
      console.log('---onUnmounted---')
    })

    // 返回一个对象（常用）
    return {
      sum
    }
  },
  // 通过配置项的形式使用生命周期钩子
  /* beforeCreate() {
    console.log('---beforeCreate---')
  },
  created() {
    console.log('---created---')
  },
  beforeMount() {
    console.log('---beforeMount---')
  },
  mounted() {
    console.log('---mounted---')
  },
  beforeUpdate() {
    console.log('---beforeUpdate---')
  },
  updated() {
    console.log('---updated---')
  } */
}
</script>