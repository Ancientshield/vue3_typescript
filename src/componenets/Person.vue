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
		<hr />
		<h2>測試：{{ obj.a.b.c }}</h2>
		<button @click="changeObj">修改</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { reactive } from 'vue';

	// 物件、陣列 類型用 reactive 會變成 Proxy
	let car = reactive({ brand: '賓士', price: 100 });
	const changePrice = () => {
		car.price += 1;
	};

	// 物件、陣列 類型用 reactive 會變成 Proxy
	let games = reactive([
		{ id: '001', name: '王者榮耀' },
		{ id: '002', name: '原神' },
		{ id: '003', name: '三國志' },
	]);
	const changeFirstGame = () => {
		games[0].name = '流星蝴蝶劍';
	};

	// reactive 深層次修改
	let obj = reactive({
		a: {
			b: {
				c: 666,
			},
		},
	});
	const changeObj = () => {
		obj.a.b.c = 999;
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
	}
	li {
		font-size: 20px;
	}
</style>
