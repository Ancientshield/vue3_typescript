<template>
	<div class="app">
		<h2 class="title">Vue路由測試</h2>
		<!-- 導航區靠路由 rander 出來的就是路由元件，放在views資料夾內 -->
		<div class="navigate">
			<RouterLink to="/home" active-class="active">首頁</RouterLink>
			<RouterLink :to="{ name: '新聞' }" active-class="active">新聞</RouterLink>
			<RouterLink :to="{ path: '/about' }" active-class="active"
				>關於</RouterLink
			>
		</div>
		<!-- 展示區 -->
		<div class="main-content">
			<RouterView></RouterView>
		</div>
	</div>
</template>
<script lang="ts" setup name="App">
	import { RouterView, RouterLink } from 'vue-router';
	import Header from './components/Header.vue';
</script>

<style scoped>
	/* App */
	.title {
		text-align: center;
		word-spacing: 5px;
		margin: 30px 0;
		height: 70px;
		line-height: 70px;
		background-image: linear-gradient(45deg, gray, white);
		border-radius: 10px;
		box-shadow: 0 0 2px;
		font-size: 30px;
	}
	.navigate {
		display: flex;
		justify-content: space-around;
		margin: 0 100px;
	}
	.navigate a {
		display: block;
		text-align: center;
		width: 90px;
		height: 40px;
		line-height: 40px;
		border-radius: 10px;
		background-color: gray;
		text-decoration: none;
		color: white;
		font-size: 18px;
		letter-spacing: 5px;
	}
	.navigate a.active {
		background-color: #64967e;
		color: #ffc268;
		font-weight: 900;
		text-shadow: 0 0 1px black;
		font-family: 微软雅黑;
	}
	.main-content {
		margin: 0 auto;
		margin-top: 30px;
		border-radius: 10px;
		width: 90%;
		height: 400px;
		border: 1px solid;
	}
</style>
