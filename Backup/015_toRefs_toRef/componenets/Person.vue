<template>
	<div class="person">
		<h2>姓名：{{ person.name }}</h2>
		<h2>姓名：{{ name }}</h2>
		<h2>年齡：{{ person.age }}</h2>
		<h2>年齡：{{ age }},{{ nl }}</h2>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年齡</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { reactive, toRefs, toRef } from 'vue';
	let person = reactive({
		name: '張三',
		age: 18,
	});

	// toRefs 可以用解構賦值將 reactive 物件變成具有響應式的 ref
	let { name, age } = toRefs(person);
	let nl = toRef(person, 'age');

	// 變成 ref 後要加 .value
	const changeName = () => {
		name.value += '~';
	};
	const changeAge = () => {
		age.value += 1;
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
