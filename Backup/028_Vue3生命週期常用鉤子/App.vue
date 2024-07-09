<template>
	<Person v-if="isShow" />
</template>
<script lang="ts" setup name="App">
	import Person from './componenets/Person.vue';
	import { ref, onMounted } from 'vue';
	let isShow = ref(true);
	// 三秒後卸載 Person 子元件
	setTimeout(() => {
		isShow.value = false;
	}, 3000);

	// 掛載：先子再父，App元件永遠是最後掛載的
	onMounted(() => {
		console.log('父---掛載完畢');
	});
</script>
