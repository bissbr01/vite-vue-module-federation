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
button {
  background: purple;
  color: white;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: 0.25s ease border-color;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
