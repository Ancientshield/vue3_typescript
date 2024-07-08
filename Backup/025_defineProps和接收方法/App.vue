<template>
	<!-- :list為v-bind:list縮寫 -->
	<Person a="哈哈" :list="personList" />
</template>
<script lang="ts" setup name="App">
	import Person from './componenets/Person.vue';
	import { reactive } from 'vue';
	import { type Persons } from './types';

	// let personList: Persons = reactive([
	// 更優雅的寫法
	let personList = reactive<Persons>([
		{ id: '001', name: '張三', age: 60 },
		{ id: '002', name: '李四', age: 18 },
		{ id: '003', name: '王五', age: 5 },
	]);
</script>
