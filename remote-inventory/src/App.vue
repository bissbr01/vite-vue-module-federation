<script setup lang="ts">
import Inventory from './components/Inventory.vue';

</script>

<template>
  <div class="container">
    <h1 class="title">Remote Inventory</h1>
    <Inventory />
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
