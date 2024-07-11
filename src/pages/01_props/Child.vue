<template>
	<div class="child">
		<h3>子元件</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>父給的車：{{ car }}</h4>
		<button @click="sendToy(toy)">把玩具给父元件</button>
	</div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from 'vue';

	let toy = ref('法拉利');

	// 聲明接收 props
	// 子傳父還是透過父先傳 function 給子，子再調用 function 將參數傳給父
	defineProps(['car', 'sendToy']);
</script>

<style scoped>
	.child {
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
