<script lang="ts" setup>
import { h, ref, type Component, watch } from 'vue';
import { NIcon } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import {
  TabletPortraitSharp as SiteIcon,
  People as InfoIcon,
} from '@vicons/ionicons5';
import { RouterLink, useRoute } from 'vue-router';

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/chart',
          },
        },
        { default: () => '座位表' }
      ),
    key: 'chart',
    icon: renderIcon(SiteIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/list',
          },
        },
        { default: () => '学生信息' }
      ),
    key: 'list',
    icon: renderIcon(InfoIcon),
  },
];
const activeKey = ref<string | null>(null);
const route = useRoute()
watch(() => route.path, (value) => {
  activeKey.value = value.slice(1)
})
</script>

<template>
  <n-menu
    v-model:value="activeKey"
    :options="menuOptions"
  />
</template>
