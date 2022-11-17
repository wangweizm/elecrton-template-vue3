<template>
  <h1>{{ state.msg }}</h1>

</template>
<script setup lang="ts">
  import { reactive } from 'vue'
  const state = reactive<{msg:string}>({
    msg:'123'
  })
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
