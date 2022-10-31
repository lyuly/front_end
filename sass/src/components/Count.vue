<script setup lang='ts'>
import { Ref, ref } from 'vue';

const a: Ref<number> = ref(0)

const sum = (): void => {
  a.value++
}

</script>

<template>
  <div class="count">
    <div class="show">
      <p>{{a}}</p>
    </div>
    <div class="button">
      <button @click="sum">点击</button>
      <a href="http://www.google.com">谷歌</a>
    </div>
  </div>
</template>

<style scoped lang="sass">
  .count
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 100vw
    height: 100vh
  .show
    font-size: 16px
  a
    display: inline
    text-decoration: none
    &:hover
      border: 2px rgba(#000, .5) solid
    &::before
      content: '呢绒'
  
</style>