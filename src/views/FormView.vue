<template>
  <Panel header="Formulário de produto">
    <h1>Produto</h1>
    <InputText v-model="formStore.textInput"></InputText>
  </Panel>
</template>

<script setup lang="js">
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import { useFormStore } from '@/stores/FormStore'

const formStore = useFormStore()
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
