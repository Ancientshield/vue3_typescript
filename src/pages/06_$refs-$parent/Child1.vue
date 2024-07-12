<template>
	<div class="child1">
		<h3>子元件1</h3>
		<h4>玩具：{{ toy }}</h4>
		<h4>書籍：{{ book }} 本</h4>
		<button @click="minusHouse($parent)">賣掉父親一棟房產</button>
	</div>
</template>

<script setup lang="ts" name="Child1">
	import { ref } from 'vue';

	let toy = ref('奥特曼');
	let book = ref(3);

	const minusHouse = (parent: any) => {
		if (parent.house > 0) parent.house -= 1;
	};

	// 向外部提供數據
	defineExpose({ toy, book });
</script>

<style scoped>
	.child1 {
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>
