<template>
	<div class="person">
		<ul>
			<li v-for="p in list" :key="p.id">{{ p.name }} - {{ p.age }}</li>
		</ul>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { withDefaults } from 'vue';
	import { type Persons } from '../types';

	// 只接收a和list
	// defineProps(['a', 'list']);

	// 只接收a，並將a保存起來
	// let x = defineProps(['a']);
	// console.log(x.a)

	// 接收 list 並 限制類型
	// defineProps<{ list: Persons }>();

	// 接收 list + 限制類型 + 限制必要性 + 指定默認值
	withDefaults(defineProps<{ list?: Persons }>(), {
		list: () => [{ id: '004', name: '康師傅', age: 19 }],
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
