<script lang='ts' setup>

</script>

<template>
  <n-card
    title="带封面的卡片"
    embedded
    :bordered="false"
    class="site_card"
  > 
    <template #cover>
      <img
        src="@/assets/vue.svg"
      >
    </template>
    卡片内容
  </n-card>
</template>
