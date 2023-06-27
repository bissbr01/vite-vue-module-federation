<script setup lang="ts">
import { useCartStore } from '../store';
import { Item } from '../types';

interface BuyNowProps {
  item: Item
}
const props = defineProps<BuyNowProps>()

const cart = useCartStore()
const handleClick = () => {
  let newItem = props.item
  cart.items.push(newItem)
}
</script>

<template>
  <button class="button" @click="handleClick">Buy for ${{ item.price }} </button>
</template>

<style scoped>
.button {
  background: purple;
  color: white;
}
</style>
