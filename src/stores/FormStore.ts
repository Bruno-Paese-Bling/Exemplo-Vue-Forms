import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  const textInput = ref('')

  return { textInput }
})
