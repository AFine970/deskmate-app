<script lang='ts' setup>
import { CashOutline as CashIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-button
    strong
    secondary
    circle
    type="error"
  >
    <template #icon>
      <n-icon><cash-icon /></n-icon>
    </template>
  </n-button>
</template>

<style lang='less' scoped>
</style>
