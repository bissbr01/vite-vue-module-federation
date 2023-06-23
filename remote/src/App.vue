<script setup lang="ts">
import Button from './components/Button.vue'
</script>

<template>
  <div class="container">
    <h1 class="title">Remote App</h1>
    <Button />
    <h2>Store:</h2>
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
