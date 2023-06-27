import { defineStore } from "pinia"
import { ref } from "vue"
import { Item } from "./types"

export const useCartStore = defineStore('cartStore', () => {
  const items = ref<Item[]>([])


  return { items }
})