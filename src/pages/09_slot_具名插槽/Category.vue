<template>
	<div class="category">
		<!-- 默認插槽的名稱為 default  -->
		<!-- <solt name="default"></solt> -->
		<slot name="s1">默認內容1</slot>
		<slot name="s2">默認内容2</slot>
	</div>
</template>

<script setup lang="ts" name="Category"></script>

<style scoped>
	.category {
		background-color: skyblue;
		border-radius: 10px;
		box-shadow: 0 0 10px;
		padding: 10px;
		width: 200px;
		height: 300px;
	}
</style>
