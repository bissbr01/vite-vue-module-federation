<script setup lang="ts">
const testItem = {
  sku: 123,
  title: 'test paste',
  price: 144,
  quantity: 1
}
</script>
<template>
  <BuyNow :item="testItem" />
  <Cart />
</template>


<style scoped></style>