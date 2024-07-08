<template>
	<div class="person">
		<h1>情況五：監視上述多個數據</h1>
		<h2>姓名：{{ person.name }}</h2>
		<h2>年齡：{{ person.age }}</h2>
		<h2>汽車：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年齡</button>
		<button @click="changeC1">修改第一台車</button>
		<button @click="changeC2">修改第二台車</button>
		<button @click="changeCar">修改所有車</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { reactive, watch } from 'vue';

	let person = reactive({
		name: '張三',
		age: 18,
		car: {
			c1: '特斯拉',
			c2: '法拉利',
		},
	});

	const changeName = () => {
		person.name += '~';
	};
	const changeAge = () => {
		person.age += 1;
	};
	const changeC1 = () => {
		person.car.c1 = '福特';
	};
	const changeC2 = () => {
		person.car.c2 = '豐田';
	};
	const changeCar = () => {
		person.car = { c1: '奧迪', c2: '凱迪拉克' };
	};

	// watch(person.name, (newVal, oldVal) => {}); // person.name 報錯
	// 不能像上面這樣寫，控制台報錯 A watch source can only be a
	// 1. getter/effect function
	// 2. a ref reactive
	// 3. object
	// 4. or an array of these types.

	// 監視多個數據，用陣列
	watch([() => person.name, () => person.car.c1], (newValue, oldVal) => {
		console.log('監視', newValue, oldVal);
	});
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
</style>
