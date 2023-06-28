<script lang="ts" setup>

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>


<template>
  <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1">
      <span>Home</span>
    </el-menu-item>
    <el-menu-item index="2">
      <span>Inventory</span>
    </el-menu-item>
    <el-menu-item index="3">
      <span>MyPage</span>
    </el-menu-item>
  </el-menu>
</template>

