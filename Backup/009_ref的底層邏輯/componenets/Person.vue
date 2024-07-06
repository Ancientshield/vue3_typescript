<template>
	<div class="person">
		<h2>汽車資訊：一輛{{ car.brand }}車，價值{{ car.price }}萬</h2>
		<button @click="changePrice">修改價格</button>
		<br />
		<h2>遊戲列表：</h2>
		<ul>
			<!-- v-bind 可以不用寫 -->
			<li v-for="g in games" v-bind:key="g.id">{{ g.name }}</li>
		</ul>
		<button @click="changeFirstGame">修改第一個遊戲的名字</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { ref } from 'vue';

	// 物件、陣列 類型用 reactive 會變成 Proxy
	let car = ref({ brand: '賓士', price: 100 });
	const changePrice = () => {
		car.value.price += 1;
	};

	// 物件、陣列 類型用 reactive 會變成 Proxy
	let games = ref([
		{ id: '001', name: '王者榮耀' },
		{ id: '002', name: '原神' },
		{ id: '003', name: '三國志' },
	]);
	// 陣列要在前面 .value
	const changeFirstGame = () => {
		games.value[0].name = '流星蝴蝶劍';
	};
	// 結論：ref 遇到物件or陣列，底層還是用 reactive
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
	}
	li {
		font-size: 20px;
	}
</style>
