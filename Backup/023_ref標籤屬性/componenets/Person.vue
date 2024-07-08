<template>
	<div class="person">
		<h1>台北</h1>
		<h2 ref="title2">台中</h2>
		<h3>高雄</h3>
		<button @click="showLog">輸出h2元素</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { ref, defineExpose } from 'vue';

	// 創建一個 title2 的容器，用於存儲 ref 標記的內容
	let title2 = ref();
	let a = ref(0);
	let b = ref(1);
	let c = ref(2);

	const showLog = () => {
		// 如果 App.vue 也有 id="title2"，這樣寫就會失敗。
		// console.log(document.getElementById('title2'));
		console.log(title2.value);
	};
	defineExpose({ a, b }); // 父元件可以看 a b
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
