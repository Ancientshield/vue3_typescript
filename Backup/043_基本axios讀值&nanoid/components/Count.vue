<template>
	<div class="count">
		<h2>當前求和為：{{ sum }}</h2>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="add">加</button>
		<button @click="minus">減</button>
	</div>
</template>

<script setup lang="ts" name="Count">
	import { ref } from 'vue';

	let sum = ref(1); // 當前求和
	let n = ref(1); // 使用者選擇的數字
	const add = () => {
		sum.value += n.value;
	};
	const minus = () => {
		sum.value -= n.value;
	};
</script>

<style scoped>
	.count {
		background-color: skyblue;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 0 10px;
	}
	select,
	button {
		margin: 0 5px;
		height: 25px;
	}
</style>
