<template>
	<div class="person">
		<h1>情況三：監視 reactive 定義的物件類型數據</h1>
		<h2>姓名：{{ person.name }}</h2>
		<h2>年齡：{{ person.age }}</h2>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年齡</button>
		<button @click="changePerson">修改人</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { reactive, watch } from 'vue';

	let person = reactive({
		name: '張三',
		age: 18,
	});
	const changeName = () => {
		person.name += '~';
	};
	const changeAge = () => {
		person.age += 1;
	};
	// 這並不是修改整個物件，只是一個一個去 assign 屬性內的值
	const changePerson = () => {
		person = Object.assign(person, { name: '李四', age: 90 });
	};

	// 監視 reactive object 時，默認開啟 deep: true，且無法關閉，deep: false 也無用。
	// 隱式創建深層監視
	watch(person, (newVal, oldVal) => {
		console.log('person變化了', newVal, oldVal);
		// 不管點哪個 button 都會打印
		// 打印的新舊值都相同，因為 obj 來源沒變。
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
