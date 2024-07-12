<template>
	<div class="grand-child">
		<h3>我是孫元件</h3>
		<h4>銀子：{{ money }}萬元</h4>
		<h4>車子：{{ car.brand }}，價值{{ car.price }}萬元</h4>
		<button @click="updateMoney(6)">花爺爺的錢</button>
	</div>
</template>

<script setup lang="ts" name="GrandChild">
	import { inject } from 'vue';

	// inject 的第二個參數是默認值，讓孫元件能自通推斷類型
	let { money, updateMoney } = inject('moneyContext', {
		money: 0,
		updateMoney: (param: number) => {},
	});
	let car = inject('carName', { brand: '未知', price: 0 });
</script>

<style scoped>
	.grand-child {
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>
