<script setup lang="ts">
import { IconShoppingCart } from '@tabler/icons-vue';
import { useCartStore } from '../store';
const cart = useCartStore()
</script>

<template>
  <section>
    <div class="header">
      <h2 style="font-size: 28px;">Cart</h2>
    </div>
    <span class="cart-icon">
      <IconShoppingCart /> {{ cart.items.length }}
    </span>
    <menu class="menu">
      <ul v-for="item in cart.items" :key="item.sku" class="cart-item">
        <div><img :src="item.url" width="200" height="150" class="img" /></div>
        <span style="font-size: 18px; font-weight: 600;">{{ item.name }}</span>
        <span>sku: {{ item.sku }}</span>
        <div>
          <button style="font-size: 16">${{ item.price }}</button>
        </div>
      </ul>
    </menu>
  </section>
</template>

<style scoped>
.header {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

.cart-icon {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.cart-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;
}


.img {
  border-radius: 5px;
}

.menu {
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 100px;
}

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