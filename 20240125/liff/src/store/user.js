// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref('')

  return {
    token
  }
}, {
  persist: {
    key: 'line-test',
    paths: ['token']
  }
})
