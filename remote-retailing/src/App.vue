<script setup lang="ts">
import BuyNow from './components/BuyNow.vue'
import Cart from './components/Cart.vue';

const testItem = {
  sku: 123,
  name: 'test paste',
  price: 142,
  quantity: 1,
  url: 'https://picsum.photos/id/48/5000/3333'
}
</script>

<template>
  <div class="container">
    <h1 class="title">Remote Retailing</h1>
    <BuyNow :item="testItem" />
    <Cart />
    <span></span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  width: 800px;
}

.title {
  background: teal;
  color: white;
  padding: 1rem;
  border-radius: .5rem;

}
</style>
