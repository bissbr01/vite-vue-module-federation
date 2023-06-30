<script setup lang="ts">


</script>

<template>
  <div style="height:98vh">
    <el-container style="height:100%">
      <el-header class="title">Micro Frontend POC</el-header>
      <el-container>
        <el-aside width="300px" style="height:100%">
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

.title {
  font-size: 36px;
  text-align: center;
  font-weight: 700;
}

.nav {
  width: 300px;
  height: 100%;
  background: darkgray;
  color: white;
  border: none;
}
</style>
