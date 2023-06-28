<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>


<template>
  <el-menu default-active="1" class="el-menu-vertical-demo">
    <el-menu-item index="1" @click="router.push('/')">
      <span>Home</span>
    </el-menu-item>
    <el-menu-item index="2" @click="router.push('/inventory')">
      <span>Inventory</span>
    </el-menu-item>
    <el-menu-item index="3" @click="router.push('/mypage')">
      <span>MyPage</span>
    </el-menu-item>
  </el-menu>
</template>

