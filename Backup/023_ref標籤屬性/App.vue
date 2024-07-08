<template>
	<!-- <h2 id="title2">你好</h2> --><!-- 會干擾 -->
	<!-- ref標籤互不干擾 -->
	<h2 ref="title2">你好</h2>
	<button @click="showLog">測試</button>
	<Person ref="ren" />
</template>
<script lnag="ts" setup name="App">
	import Person from './componenets/Person.vue';
	import { ref } from 'vue';

	let title2 = ref();
	let ren = ref();
	const showLog = () => {
		// console.log(title2.value);
		console.log(ren.value); // 子元件物件實體
		// 但看不到子元件內的 a b c
		// 除非子元件用 defineExpose
	};
</script>
