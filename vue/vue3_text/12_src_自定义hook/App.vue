<template>
  <button @click="isShowDemo = !isShowDemo">切换隐藏</button>
  <Demo v-if="isShowDemo"/>
</template>

<script>
import {ref} from 'vue'
import Demo from './components/Demo.vue'
export default {
  name:'App',
  components: {
    Demo
  },
  setup() {
    let isShowDemo = ref(true)

    return {
      isShowDemo
    }
  }
}
</script>