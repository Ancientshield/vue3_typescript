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
	import { storeToRefs } from 'pinia';
	import { useCountStore } from '@/store/count';

	const countStore = useCountStore();
	// 以下兩種方式都可以拿到 state 中的數據
	// console.log(countStore.sum);
	// console.log(countStore.$state.sum);

	// 精簡面板並且保持響應性，storeToRefs 只會關注 store 內的數據，不會對方法做 ref 包裹
	const { sum } = storeToRefs(countStore);

	let n = ref(1); // 使用者選擇的數字

	const add = () => {
		// 第三種，在 store 內加入 actions 並調用
		countStore.increment(n.value);
	};
	const minus = () => {
		countStore.sum -= n.value;
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
