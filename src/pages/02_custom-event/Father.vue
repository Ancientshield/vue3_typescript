<template>
	<div class="father">
		<h3>父元件</h3>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<!-- 给子元件 Child 綁定自定義 send-toy 事件 -->
		<Child @send-toy="saveToy" />
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue';
	import { ref } from 'vue';

	let toy = ref('');
	const saveToy = (value: string) => {
		// console.log('saveToy',value)
		toy.value = value;
	};
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
	.father button {
		margin-right: 5px;
	}
</style>
