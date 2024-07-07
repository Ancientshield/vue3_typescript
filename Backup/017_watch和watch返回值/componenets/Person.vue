<template>
	<div class="person">
		<h1>情況一：監視 ref 定義的基本類型數據</h1>
		<h2>當前求和為：{{ sum }}</h2>
		<button @click="changeSum">點我+1</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { ref, watch } from 'vue';

	let sum = ref(0);
	const changeSum = () => {
		sum.value += 1;
	};

	// 用 watch 監視基本類型 ref，不需要加 sum.value
	// 因為 watch 只能只能監視 ref 定義
	// watch 的返回值為 stop，可以多加利用
	const stopWatch = watch(sum, (newVal, odeVal) => {
		console.log('sum變化了', newVal, odeVal);
		if (newVal >= 10) {
			stopWatch();
		}
	});
</script>

<style scoped>
	.person {
		background-color: skyblue;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 20px;
	}
	button {
		margin: 0 5px;
		font-size: 20px;
	}
	li,
	label,
	input,
	span {
		font-size: 20px;
	}
</style>
