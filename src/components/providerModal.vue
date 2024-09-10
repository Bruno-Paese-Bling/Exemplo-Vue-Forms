<template>
	<div class="flex flex-col gap-2">
		<div class="card flex justify-center">
			<Button label="Alterar dados do fornecedor" @click="show" />
			<Dialog v-model:visible="visible" modal header="Fornecedor" :style="{ width: '25rem' }">
				<div class="flex flex-col gap-3">
					<span class="text-surface-500 dark:text-surface-400 block mb-8">Informações do fornecedor</span>
					<div class="flex items-center gap-4 mb-4">
						<label for="nome" class="font-semibold w-24">Nome</label>
						<InputText id="nome" class="flex-auto" autocomplete="off" v-model="name"/>
					</div>
					<div class="flex items-center gap-4 mb-8">
						<label for="rsl" class="font-semibold w-24">Razão social</label>
						<InputText id="rs" class="flex-auto" autocomplete="off" v-model="socialName"/>
					</div>
					<div class="flex justify-end gap-2">
						<Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
						<Button type="button" label="Save" @click="saveInformation()"></Button>
					</div>
				</div>
			</Dialog>
		</div>
	</div>
</template>
<script setup lang="ts">
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import type IProviderModal from './Contracts/IProviderModel.ts';
import { watch } from 'vue';
import { ref, PropType } from "vue";

const emit = defineEmits(['update:modelValue']);

const model = defineModel({
	required: true,
	type: Object as PropType<IProviderModal>
});

const name = ref();
const socialName = ref();
const visible = ref(false);

watch(model, () => {
	socialName.value = model.value.socialName + '';
	name.value = model.value.name + '';
})

const show = () => {
	visible.value = true;
	socialName.value = model.value.socialName ?? '';
	name.value = model.value.name ?? '';
}

const saveInformation = () => {
	visible.value = false;
	emit('update:modelValue', {
		name: name.value,
		socialName: socialName.value
	} as IProviderModal);
}

</script>