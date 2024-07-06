<template>
	<div class="person">
		<label>姓：<input type="text" v-model="firstName" /></label>
		<br />
		<label>名：<input type="text" v-model="lastName" /></label>
		<br />
		<!-- 下面的寫法會讓模板變很複雜，用 computed 讓模板單純一點 -->
		<!-- <span>全名：{{ firstName }}{{ lastName }}</span> -->
		<button @click="changeFullName">改名為John-Lee</button><br />
		<span>{{ fullName }}</span
		><br />
		<span>{{ fullName }}</span
		><br />
		<span>{{ fullName }}</span>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { ref, computed } from 'vue';

	let firstName = ref('jack');
	let lastName = ref('lin');

	// 用計算屬性，即使模板上要顯示多次，只要是相同值 fullName，只會計算一次
	// 但這樣的寫，fullName 是計算屬性，只可讀，不可改
	// let fullName = computed(() => {
	// 	return `${firstName.value.slice(0, 1).toUpperCase()}${firstName.value.slice(1)}${lastName.value}`;
	// });

	// 有用{}、get()、set()的 computed()也是計算屬性，但可讀可寫
	let fullName = computed({
		get() {
			return `${firstName.value
				.slice(0, 1)
				.toUpperCase()}${firstName.value.slice(1)}-${lastName.value}`;
		},
		set(val) {
			const [str1, str2] = val.split('-');
			firstName.value = str1;
			lastName.value = str2;
		},
	});
	const changeFullName = () => {
		fullName.value = 'John-le';
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
	li,
	label,
	input,
	span {
		font-size: 20px;
	}
</style>
