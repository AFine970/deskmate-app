<script setup lang="ts">
import { ref } from 'vue';
import AppLogo from './components/AppLogo.vue';
import NavMenu from './components/NavMenu.vue';
import SiteChart from './views/site_chart/SiteChart.vue';
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
    <n-layout style="height: 100vh">
      <n-layout-header
        style="height: 64px; display: flex; align-items: center; padding: 0 24px;"
        bordered
      >
        <AppLogo />
        <NavMenu />
      </n-layout-header>
      <n-layout
        position="absolute"
        style="top: 64px;"
      >
        <n-layout
          content-style="padding: 24px 12px 0; min-height: 90vh"
          :native-scrollbar="false"
        >
          <n-message-provider>
            <RouterView />
          </n-message-provider>
        </n-layout>
        <n-layout-footer
          style="height: 64px; padding: 24px; text-align: center; margin-top: 24px;"
        >
          Deskmate App ©2023 Created by AFine970
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<style lang="less" scoped>
// .logo.vite:hover {
//   filter: drop-shadow(0 0 2em #747bff);
// }
</style>
