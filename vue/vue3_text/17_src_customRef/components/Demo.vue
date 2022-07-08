<template>
  <div>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
  </div>
</template>

<script>
import {ref, customRef} from 'vue'
export default {
  name: 'Demo',
  setup() {

    // 自定义一个ref名为myRef
    function myRef(value) {
      // console.log('--myRef--', value)
      return customRef((track, trigger) => {
        return {
          get(){
          console.log('有人从myRef中读取了')
          track() // 通知Vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的）
          return value
        },
          set(newValue){
            console.log('有人把myRef修改了', newValue)
            value = newValue
            trigger() // 通知Vue去重新解析模板
          }
        }
      })
    }

  //  let keyWord = ref('hello') // 使用vue提供的ref
  let keyWord = myRef('hello') // 使用程序员自定义的ref
   return {keyWord}
  }
}
</script>