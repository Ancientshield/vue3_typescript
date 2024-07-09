<template>
	<div class="person">
		<h2>當前求和為：{{ sum }}，放大十倍：{{ bigSum }}</h2>
		<button @click="add">點我+1</button>
		<hr />
		<img v-for="(dog, index) in dogList" :src="dog" :key="index" />
		<hr />
		<button @click="getDog">再加一隻狗</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import useSum from '@/hooks/useSum';
	import useDog from '@/hooks/useDog';

	const { sum, add, bigSum } = useSum();
	const { dogList, getDog } = useDog();

	// 把下面這串都寫在 hooks (typescript) 內，讓元件更精簡
	// import { ref, reactive } from 'vue';
	// import axios from 'axios';
	// let sum = ref(0);
	// const add = () => {
	// 	sum.value += 1;
	// };

	// let dogList = reactive([
	// 	'https://images.dog.ceo/breeds/pembroke/n02113023_6826.jpg',
	// ]);
	// const getDog = async () => {
	// 	try {
	// 		let result = await axios.get(
	// 			'https://dog.ceo/api/breed/pembroke/images/random'
	// 		);
	// 		dogList.push(result.data.message);
	// 	} catch (error) {
	// 		alert(error);
	// 	}
	// };
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
	img {
		height: 200px;
		margin-right: 10px;
	}
</style>
