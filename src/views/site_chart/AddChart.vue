<script lang='ts' setup>
import { Add as AddIcon } from '@vicons/ionicons5'
</script>

<template>
  <n-button
    type="primary"
    dashed
    style="width: 100%;height: 100%;"
  >
    <template #icon>
      <n-icon>
        <add-icon style="font-size: 24px;" />
      </n-icon>
    </template>
  </n-button>
</template>

<style lang='less' scoped>
</style>
