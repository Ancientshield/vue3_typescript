<template>
	<div class="home">
		<img src="http://www.atguigu.com/images/index_new/logo.png" alt="" />
	</div>
</template>

<script setup lang="ts" name="Home">
	import { onMounted } from 'vue';
	import { useRouter } from 'vue-router';

	// 編程式路由導航
	const router = useRouter();

	// 首頁被掛載後，再過三秒跳轉到新聞頁
	/* onMounted(() => {
		setTimeout(() => {
			router.push('/news');
		}, 3000);
	}); */
</script>

<style scoped>
	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>
