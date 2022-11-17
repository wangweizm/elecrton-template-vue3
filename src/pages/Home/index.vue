<script setup lang="ts">
 
 
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
 
</script>

<template>
   来了老弟
   <el-button @click="() => { toggleDark() }"> {{ isDark ? '开灯' : '关灯' }}</el-button>
</template>

<style scoped lang="less">

</style>
