<script lang="ts" setup>
import {
  Search as SearchIcon,
  Refresh as RefreshIcon,
  FileTray as ImportFileIcon
} from '@vicons/ionicons5';
</script>

<template>
  <n-space justify="space-between">
    <n-button type="primary">
      <template #icon>
        <n-icon>
          <import-file-icon />
        </n-icon>
      </template>
      导入
    </n-button>
    <n-space>
      <n-input
        placeholder="搜索"
        clearable
      >
        <template #prefix>
          <n-icon :component="SearchIcon" />
        </template>
      </n-input>
      <n-button>
        <template #icon>
          <n-icon><refresh-icon /></n-icon>
        </template>
      </n-button>
    </n-space>
  </n-space>
</template>
