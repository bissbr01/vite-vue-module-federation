<script setup lang="ts">
import { IconShoppingCart } from '@tabler/icons-vue';
import { useCartStore } from '../store';
const cart = useCartStore()
</script>

<template>
  <span class="cart">
    <IconShoppingCart /> {{ cart.items.length }}
  </span>
</template>

<style scoped>
.cart {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}
</style>