<script lang='ts' setup>
import { Play as PlayIcon } from '@vicons/ionicons5';
import { Pencil as PencilIcon } from '@vicons/ionicons5';
</script>

<template>
  <n-card
    size="large"
    hoverable
  >
    <template #header>
      <n-gradient-text type="success">
        卡片示例代码
      </n-gradient-text>
    </template>
    <div style="height: 140px;overflow: hidden;">
      <n-scrollbar style="max-height: 140px;">
        这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗这个是一个图片你信吗
      </n-scrollbar>
    </div>
    <template #footer>
      最后修改时间: 2023:07:09 15:27
    </template>
    <template #action>
      <n-space justify="end">
        <n-tooltip
          placement="bottom"
          trigger="hover"
        >
          <template #trigger>
            <n-button circle>
              <template #icon>
                <n-icon>
                  <pencil-icon />
                </n-icon>
              </template>
            </n-button>
          </template>
          <span>编辑</span>
        </n-tooltip>
        
        <n-tooltip
          placement="bottom"
          trigger="hover"
        >
          <template #trigger>
            <n-button
              circle
              type="primary"
            >
              <template #icon>
                <n-icon>
                  <play-icon />
                </n-icon>
              </template>
            </n-button>
          </template>
          <span>开始换座位</span>
        </n-tooltip>
      </n-space>
    </template>
  </n-card>
</template>
