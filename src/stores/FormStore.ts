import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useFormStore = defineStore('form', () => {
  const textInput = ref('')
  const price = ref('')
  const date = ref('')
  const provider = ref({})

  return {
	textInput,
	price,
	date,
	provider,
}
})
