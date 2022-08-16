<script setup lang="ts">
import About from './About.vue'
import { computed, onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, provide, reactive, ref, watch } from 'vue';
import { useMouse } from '../utils/mouse'
import { useFetch } from '../utils/fetch'

const {x, y}  = useMouse();

const { data, error } = useFetch('')

console.log(data);

const count = ref(0);
provide('key', count);

function doSomething() {
  console.log('父组件监听到 onMounted 钩子函数');
}

let sum = ref(0);

let obj = reactive({
  name: 'pig',
  age: 18
})

// console.log(`我是setup的sum：${sum.value}`);

function add() {
  return sum.value++;
}

function change() {
  obj.name = 'mike';
  obj.age = 20;
}

// onBeforeMount(() => {
//   console.log('我是onBeforeMount');
// })

// onMounted(() => {
//   console.log('do do do');
// })

// onBeforeUpdate(() => {
//   console.log(`我是onBeforeUpdate，此时sum是：${sum.value}`);
// })

// onUpdated(() => {
//   console.log(`我是onUpdated，此时sum是：${sum.value}`);
// })

const a = computed(() => {
  return sum.value > 5 ? 'Yes' : 'No'
})

// 普通监听
// watch(sum, (newSum) => {
//   console.log(`我是watch的sum is ${newSum}`);
// })


// 对象监听
// watch(
//   () => obj.name,
//   (name) => {
//     console.log(`name is：${name}`);
//   }
// )

// 整体对象的监听
// watch(obj, (newValue, oldValue) => {
//   console.log(`新值：${JSON.stringify(newValue)} 旧值：${JSON.stringify(oldValue)}`);
// })
</script>

<template>
  <About title="第一章" page="18" @hook:onMounted="doSomething">
  {{sum}}
  </About>
  <button @click.once="add">加法</button>
  <p>{{a}}</p>
  <button @click="change">修改</button>
  <p>{{obj}}</p>
  <p>{{x}}, {{y}}</p>
  <li v-for="item in data">
    {{item.name}} - {{item.age}} - {{item.sex}}
  </li>
</template>

<style>

</style>