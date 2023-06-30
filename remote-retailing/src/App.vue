<script setup lang="ts">
import BuyNow from './components/BuyNow.vue'
import CartIcon from './components/CartIcon.vue';

const testItem = {
  sku: 123,
  name: 'test paste',
  price: 142,
  quantity: 1
}
</script>

<template>
  <div class="container">
    <h1 class="title">Remote Retailing</h1>
    <BuyNow :item="testItem" />
    <CartIcon />
    <span></span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
}

.title {
  background: teal;
  color: white;
  padding: 1rem;
  border-radius: .5rem;

}
</style>
