<template>
	<div class="person">
		<h2>汽車資訊：一輛{{ car.brand }}車，價值{{ car.price }}萬</h2>
		<button @click="changeBrand">修改品牌</button>
		<button @click="changePrice">修改價格</button>
		<button @click="changeCar">修改車輛</button>
		<hr />
		<h2>當前求和為：{{ sum }}</h2>
		<button @click="changeSum">點我+1</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { ref, reactive } from 'vue';

	// 物件、陣列 類型用 reactive 會變成 Proxy
	let car = reactive({ brand: '賓士', price: 100 });
	const changePrice = () => {
		car.price += 1;
	};
	const changeBrand = () => {
		car.brand = '法拉利';
	};

	const changeCar = () => {
		// reactive 定義的整體物件不可以直接修改
		// car = { brand: '特斯拉', price: 200 } // 錯誤寫法
		// car = reactive({ brand: '特斯拉', price: 200 }) // 錯誤寫法
		// 修改 reactive 的整個物件，必須要用 Object.assign()，否則會失去響應性，無法修改
		Object.assign(car, { brand: '特斯拉', price: 200 });
	};

	let sum = ref(0);
	const changeSum = () => {
		sum.value += 1;
	};
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
	li {
		font-size: 20px;
	}
</style>
