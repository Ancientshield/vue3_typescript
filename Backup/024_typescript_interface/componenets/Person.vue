<template>
	<div class="person">???</div>
</template>

<script lang="ts" setup name="Person">
	// PersonInter 不是值，是一種定義，所以前面要加 type
	import { type PersonInter, type Persons } from '@/types';

	// person 必須符合 PersonInter 規範
	let person: PersonInter = {
		id: '001',
		name: '張三',
		age: 60,
	};

	// 陣列內的每一個物件都符合泛型定義
	let personList: Array<PersonInter> = [
		{ id: '001', name: '張三', age: 60 },
		{ id: '002', name: '李四', age: 18 },
		{ id: '003', name: '王五', age: 5 },
	];

	// 可以在 index.ts 再定義
	let personList2: Persons = [
		{ id: '001', name: '張三', age: 60 },
		{ id: '002', name: '李四', age: 18 },
		{ id: '003', name: '王五', age: 5 },
	];
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
