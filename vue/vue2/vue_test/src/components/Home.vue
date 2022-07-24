<template>
  <div>
    <button @click="add()">点我加1</button>
    {{a}}
  </div>
</template>

<script setup>
import { ref } from 'vue';

let a = ref(1);

function add() {
  return a.value++;
}

</script>

<style>
  
</style>