<script setup lang="ts">

export interface CardProps {
  id: string
  author: string
  url: string
}
defineProps<CardProps>()
defineSlots<{ default(props: {}): any }>()

</script>
<template>
  <el-card style="{ padding: '0px' }">
    <img :src="url" class="image" width="260" height="170" />
    <div>
      <div class="author">
        <span>{{ author }}</span>
      </div>
      <div class="bottom">
        <slot />
      </div>
    </div>
  </el-card>
</template>

<style scoped>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image {
  width: 100%;
  display: block;
}

.author {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 0.5rem 0;
}
</style>
