<script setup lang="ts">
import { ref } from 'vue';
import NavMenu from './components/NavMenu.vue';
import { darkTheme, zhCN, dateZhCN } from 'naive-ui';
import type { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';

const theme = ref<BuiltInGlobalTheme>()
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // 暗黑模式
  theme.value = darkTheme
}
</script>

<template>
  <n-config-provider
    :theme="theme"
    :locale="zhCN"
    :date-locale="dateZhCN"
  >
    <n-message-provider>
      <n-layout
        style="height: 100vh"
        has-sider
      >
        <n-layout-sider
          bordered
          show-trigger
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :native-scrollbar="false"
        >
          <NavMenu :collapsed-width="64" />
        </n-layout-sider>
        <n-layout
          content-style="padding: 12px"
          :native-scrollbar="false"
        >
          <RouterView />
        </n-layout>
      </n-layout>
    </n-message-provider>
  </n-config-provider>
</template>

<style lang="less" scoped>
// .logo.vite:hover {
//   filter: drop-shadow(0 0 2em #747bff);
// }
</style>
