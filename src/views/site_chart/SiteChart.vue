<script lang='ts' setup>
import ChartCard from './ChartCard.vue';
import AddChart from './AddChart.vue';
</script>

<template>
  <n-grid
    :x-gap="32"
    :y-gap="48"
    :cols="5"
  >
    <n-grid-item>
      <AddChart />
    </n-grid-item>
    <n-grid-item
      v-for="item in 9"
      :key="item"
    >
      <ChartCard />
    </n-grid-item>
  </n-grid>
</template>

<style lang='less' scoped>
</style>
