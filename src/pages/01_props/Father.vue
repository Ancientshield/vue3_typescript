<template>
	<div class="father">
		<h3>父元件</h3>
		<h4>父元件的車：{{ car }}</h4>
		<h4 v-show="toy">子給的玩具：{{ toy }}</h4>
		<Child :car="car" :sendToy="getToy" />
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue';
	import { ref } from 'vue';

	let car = ref('賓士');
	let toy = ref('');

	const getToy = (value: string) => {
		toy.value = value;
	};
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
