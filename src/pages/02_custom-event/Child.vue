<template>
	<div class="child">
		<h3>子元件</h3>
		<h4>玩具：{{ toy }}</h4>
		<!-- 第一個參數調用函數，第二個參數傳遞值 -->
		<button @click="emit('send-toy', toy)">測試</button>
	</div>
</template>

<script setup lang="ts" name="Child">
	import { ref } from 'vue';

	let toy = ref('法拉利');
	// 聲明綁定在 <Child /> 上的 send-toy 事件
	const emit = defineEmits(['send-toy']);
</script>

<style scoped>
	.child {
		margin-top: 10px;
		background-color: rgb(76, 209, 76);
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
