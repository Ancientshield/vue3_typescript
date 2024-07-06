<template>
	<div class="person">
		<h2>姓名：{{ name }}</h2>
		<h2>年齡：{{ age }}</h2>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年齡</button>
		<button @click="showTel">查看聯繫方式</button>
	</div>
</template>

<!-- 寫兩個 script 太麻煩了，安裝插件 npm i vite-plugin-vue-setup-extend -->
<!-- <script lnag="ts">
  export default{
    name: 'Person',
  }
</script> -->

<!-- 有插件後，可以直接把name改在這 -->
<script lang="ts" setup name="Person234">
	let name = '張三';
	const changeName = () => {
		name = '老五';
	};

	let age = 18;
	const changeAge = () => {
		age += 1;
	};

	let tel = '123123';
	const showTel = () => {
		alert(tel);
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
	}
</style>
