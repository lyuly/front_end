<template>
  <p class="des">接收的值：{{ count }}</p>
  <AButton @click="changeParent(count)">传父组件</AButton>
</template>

<script>
import { defineComponent, toRefs, watch } from 'vue'
import { Button } from 'ant-design-vue'

export default defineComponent({
  name: 'todo-child',
  props: ['count'],
  emits: ['handler'],
  components: {
    AButton: Button
  },
  setup (props, context) {
    const state = props

    watch(
      () => state.count,
      (newVal, val) => {
        console.log(`子组件接收到值啦${newVal}🤭`)
      }
    )

    const changeParent = (count) => {
      context.emit('handler', count)
      console.log(`子组件传值${count}😂`)
    }

    return {
      ...toRefs(state),
      changeParent
    }
  }
})
</script>

<style scoped>
.des {
  font-size: 16px;
  color: blueviolet;
}
</style>
