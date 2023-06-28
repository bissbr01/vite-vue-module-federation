<script setup lang="ts">


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="300px">
          <Navigation class="nav" />
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.nav {
  width: 300px;
  height: 100%;
}
</style>
