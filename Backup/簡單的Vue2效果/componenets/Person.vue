<template>
	<div class="person">
		<h2>姓名：{{ name }}</h2>
		<h2>年齡：{{ age }}</h2>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年齡</button>
		<button @click="showTel">查看聯繫方式</button>
	</div>
</template>

<script lang="ts">
	export default {
		name: '',
		data() {
			return {
				name: '張三',
				age: 18,
				tel: '123123',
			};
		},
		methods: {
			changeName() {
				this.name = '老五';
			},
			changeAge() {
				this.age += 1;
			},
			showTel() {
				alert(this.tel);
			},
		},
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
