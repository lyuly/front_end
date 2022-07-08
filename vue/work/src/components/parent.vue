<template>
  <div>
    <p class="des">传递的值：{{count}}</p>
    <AButton @click="add">传子组件</AButton>
    <hr>
    <child :count='count' @handler='changeCount'/>
  </div>
</template>

<script>
import child from './child'
import { defineComponent, reactive, toRefs } from 'vue'
import { Button } from 'ant-design-vue'

export default defineComponent({
  name: 'todo-parent',
  components: {
    child,
    AButton: Button
  },
  setup (props) {
    const state = reactive({
      count: 1
    })

    const add = () => {
      state.count++
      console.log(`父组件开始传值${state.count}😄`)
    }

    const changeCount = (num) => {
      state.count += num
      console.log(`父组件接收值${state.count}✔️`)
    }

    return {
      ...toRefs(state),
      add,
      changeCount
    }
  }
})

</script>

<style scoped>
.des {
  font-size: 16px;
  color: cornflowerblue;
}
</style>
