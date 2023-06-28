<script setup lang="ts">

const testIcon = {
  sku: 123,
  title: 'test paste',
  price: 144,
  quantity: 1
}
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
          <el-button>Test</el-button>
          <BuyNow :item="testIcon" />
          <CartIcon />
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
