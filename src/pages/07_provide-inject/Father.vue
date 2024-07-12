<template>
	<div class="father">
		<h3>父元件</h3>
		<h4>銀子：{{ money }}萬元</h4>
		<h4>車子：{{ car.brand }}，價值{{ car.price }}萬元</h4>
		<Child />
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child from './Child.vue';
	// 要引入 provide
	import { ref, reactive, provide } from 'vue';

	let money = ref(100);
	let car = reactive({
		brand: '特斯拉',
		price: 100,
	});

	const updateMoney = (value: number) => {
		money.value -= value;
	};

	// provide 向後代提供 function、數據
	// provide 第二個參數不能寫 money.value，會失去響應性
	provide('moneyContext', { money, updateMoney });
	provide('carName', car);
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
