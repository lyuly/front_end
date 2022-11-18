<template>
  <div>
    <Child :a="a" :person="p" ref="child"/>
  </div>
</template>

<script>
import Child from './Child.vue'
  export default {
    name: `Home`,
    components: {
      Child
    },
    data() {
      return {
        name: 'pig',
        arr: [1, 2, 3],
        a: 1,
        p: {
          name: 'pig',
          age: 20
        }
      }
    },
    provide() {
      return {
        name: this.name,
        arr: this.arr
      }
    },
    mounted() {
      console.log(`父${this.$refs.child.name}`)
      console.log(`父获取到子${this.$refs.child.arr}`)
    },
    created() {
      this.$nextTick(function() {
        console.log('nextTick')
      })
    }
  }
</script>

<style scoped>
</style>