<template>
	<div class="person">
		<h1>水溫達到60度or水位達到80度，發request</h1>
		<h2>當前水溫：{{ temp }}度</h2>
		<h2>當前水位：{{ height }}公分</h2>
		<button @click="changeTemp">水溫+10</button>
		<button @click="changeHeight">水位+10</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { ref, watch, watchEffect } from 'vue';

	let temp = ref(10);
	let height = ref(0);

	const changeTemp = () => {
		temp.value += 10;
	};
	const changeHeight = () => {
		height.value += 10;
	};

	/* 監視 watch 實現
	watch([temp, height], (value) => {
		// console.log(value);
		// 從 value 中解構賦值取得最新水溫和最新水位
		let [newTemp, nweHeight] = value;
		if (newTemp >= 60 || nweHeight >= 80) {
			console.log('發請求！');
		}
	}); */

	// 監視 watchEffect 實現，直接監視，用誰就監聽誰
	watchEffect(() => {
		if (temp.value >= 60 || height.value >= 80) {
			console.log('發請求！');
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
