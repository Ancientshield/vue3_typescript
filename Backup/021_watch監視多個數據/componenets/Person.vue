<template>
	<div class="person">
		<h1>情況四：監視 ref 或 reactive 定義的物件類型內的『某個』屬性</h1>
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

	// 寫成 1. getter function // 能返回一個值的函數
	// 只監視 person.name // 若該屬性不是物件類型，需要寫成 getter function
	watch(
		() => person.name,
		(newVal, oldVal) => {
			console.log('person.name變化了', newVal, oldVal);
		}
	);
	// 若該屬性是物件類型，可以直接寫 person.car，但更推薦寫 getter function + { deep: true }
	// 因為物件類型是位址值，所以必須開深度
	watch(
		() => person.car,
		(newVal, oldVal) => {
			console.log('person.car變化了', newVal, oldVal);
		},
		{ deep: true }
	);
	// 結論：監視的是物件的屬性，最好還是寫函數，若要監視細節，開深度。
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
