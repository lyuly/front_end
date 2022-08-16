<script setup lang="ts">
import { inject, onMounted } from 'vue';

const msg = inject('key');

defineProps<{
  title?: String,
  page?: String
}>()

onMounted(() => {
  console.log('子组件触发 onMounted 钩子函数');
})
</script>

<template>
  <div>
    <p>父组件传过来的props是{{title}} {{page}}</p>
    <button>
      <slot/>
    </button>
    <p>{{msg}}</p>
  </div>
</template>

<style>
</style>