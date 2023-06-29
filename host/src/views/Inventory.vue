<script setup lang="ts">
import Card from '../components/Card.vue'
import useSWRV from 'swrv'

const { data, error } = useSWRV('https://picsum.photos/v2/list?page=5&limit=12')

const dataFormatted = computed(() => data.value
  .map((item: any) => ({
    ...item,
    sku: item.id,
    title: item.author,
    price: (Math.random() * 1000).toFixed(2),
    url: item.download_url,
    quantity: 1
  })))

</script>
<template>
  <div>
    <div v-if="error">Could not fetch data, please try again later.</div>
    <section v-if="data" class="cards">
      <KeepAlive>
        <div v-for="card in dataFormatted" :key="card.index">
          <Card :="card" class="card">
            <BuyNow :item="card" />
          </Card>
        </div>
      </KeepAlive>
    </section>
  </div>
</template>

<style scoped>
.button {
  padding: 0.5rem;
  min-height: auto;
  width: 100%;
}

.cards {
  display: flex;
  flex-flow: row wrap;
  min-width: 0px;
  gap: 1rem;
}

.card {
  width: 300px;
  height: 300px;
}
</style>
