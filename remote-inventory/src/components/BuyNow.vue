<script setup lang="ts">
import { useCartStore } from '../store';
import { Item } from '../types';

interface BuyNowProps {
  item: Item
}
const props = defineProps<BuyNowProps>()
const emit = defineEmits<{ addedToCart: [item: Item] }>()

const cart = useCartStore()
const handleClick = () => {
  cart.items.push(props.item)
  emit('addedToCart', props.item)
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
