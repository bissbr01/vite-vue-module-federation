<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>


<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">
    <el-menu-item class="menu-item" index="1" @click="router.push('/')">
      <span>Inventory</span>
    </el-menu-item>
    <el-menu-item class="menu-item" index="2" @click="router.push('/checkout')">
      <span>Checkout</span>
    </el-menu-item>
    <el-menu-item class="menu-item" index="3" @click="router.push('/about')">
      <span>About</span>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.menu-item {
  color: white;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid white;
}

.menu-item:hover {
  color: purple;
  transition: 1s ease all;
}
</style>

