<template>
	<Panel header="Formulário de produto">
		<div class="flex flex-col gap-3">
			<div class="flex flex-col">
				<label for="nome">Nome</label>
				<InputText id="Nome" v-model="formStore.textInput"></InputText>
			</div>
			<div class="flex flex-col gap-2">
				<label for="preco">Preço</label>
				<InputText id="preco" v-model="formStore.price" v-mask-decimal.br="2"></InputText>
			</div>
			<div class="flex flex-col gap-2">
				<label for="validade">Data de validade</label>
				<InputText id="validade" v-model="formStore.dueDate" v-mask-date.br></InputText>
			</div>
			<div class="flex flex-col gap-2">
				<ProviderModal v-model="formStore.provider"/>
			</div>
		</div>
	</Panel>
</template>

<script setup lang="js">
import Panel from 'primevue/panel'
import InputText from 'primevue/inputtext'
import { useFormStore } from '@/stores/FormStore'
import ProviderModal from '@/components/providerModal.vue'

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
