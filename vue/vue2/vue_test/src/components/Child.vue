<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: `Child`,
    props: {
      a: Number,
      person: {
        name: String,
        age: Number
      }
    },
    inject: ['name', 'arr'],
    data() {
      return {}
    },
    created() {
      console.log(this.name)
      console.log(this.arr)
      console.log(this.a)
      console.log(this.person)
    }
  }
</script>

<style scoped>
</style>