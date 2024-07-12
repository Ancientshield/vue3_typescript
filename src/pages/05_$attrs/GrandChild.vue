<template>
	<div class="grand-child">
		<h3>孫元件</h3>
		<h4>a：{{ a }}</h4>
		<h4>b：{{ b }}</h4>
		<h4>c：{{ c }}</h4>
		<h4>d：{{ d }}</h4>
		<h4>x：{{ x }}</h4>
		<h4>y：{{ y }}</h4>
		<button @click="z(6)">點我更新爺爺a的值</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
	defineProps(['a', 'b', 'c', 'd', 'x', 'y', 'z']);
</script>

<style scoped>
	.grand-child {
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>
