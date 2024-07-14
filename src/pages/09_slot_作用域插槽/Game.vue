<template>
	<div class="game">
		<h2>遊戲列表</h2>
		<!-- 給父元件 slot 元件傳遞物件 -->
		<!-- <slot name="qwe" :youxi="games" x="哈哈" y="你好"></slot> -->
		<slot :youxi="games" x="哈哈" y="你好"></slot>
	</div>
</template>

<script setup lang="ts" name="Game">
	import { reactive } from 'vue';
	// 母版樣式、結構在父元件那邊
	// 數據在子元件這邊
	// 為了讓數據能訪問父元件
	// 【作用域插槽】就產生了
	let games = reactive([
		{ id: 'asgytdfats01', name: '英雄聯盟' },
		{ id: 'asgytdfats02', name: '王者榮耀' },
		{ id: 'asgytdfats03', name: '紅色警戒' },
		{ id: 'asgytdfats04', name: '星海爭霸' },
	]);
</script>

<style scoped>
	.game {
		width: 200px;
		height: 300px;
		background-color: skyblue;
		border-radius: 10px;
		box-shadow: 0 0 10px;
	}
	h2 {
		background-color: orange;
		text-align: center;
		font-size: 20px;
		font-weight: 800;
	}
</style>
