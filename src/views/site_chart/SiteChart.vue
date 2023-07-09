<script lang='ts' setup>
import ChartCard from './ChartCard.vue';
import AddChart from './AddChart.vue';
</script>

<template>
  <n-grid
    :x-gap="24"
    :y-gap="24"
    :cols="4"
  >
    <n-grid-item>
      <AddChart />
    </n-grid-item>
    <n-grid-item
      v-for="item in 11"
      :key="item"
    >
      <ChartCard />
    </n-grid-item>
  </n-grid>
</template>
