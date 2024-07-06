<template>
	<div class="app">
		<h1>你好啊！</h1>
		<Person />
	</div>
</template>
<script lnag="ts">
	import Person from './componenets/Person.vue';
	export default {
		name: 'App',
		components: { Person }, //註冊元件
	};
</script>
<style scoped>
	.app {
		background-color: #ddd;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 20px;
	}
</style>
