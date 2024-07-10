<template>
	<div class="news">
		<!-- 導航區 -->
		<ul>
			<li v-for="news in newsList" :key="news.id">
				<!-- params 第一種寫法 -->
				<!-- <RouterLink
					:to="`/news/detail/${news.id}/${news.title}/${news.content}`"
					>{{ news.title }}</RouterLink
				> -->

				<!-- 第二種寫法 -->
				<RouterLink
					:to="{
						name: '內容',
						params: {
							id: news.id,
							title: news.title,
							content: news.content,
						},
					}"
					>{{ news.title }}</RouterLink
				>
			</li>
		</ul>
		<!-- 展示區 -->
		<div class="news-content"><RouterView></RouterView></div>
	</div>
</template>

<script setup lang="ts" name="News">
	import { reactive } from 'vue';

	let newsList = reactive([
		{ id: '001', title: '一種抗癌食物', content: '西蘭花' },
		{ id: '002', title: '如何一夜致富', content: '學IT' },
		{ id: '003', title: '震驚！萬萬沒想到' }, // router/index.ts 內 :content? 沒加問號會報錯
		// { id: '003', title: '震驚！萬萬沒想到', content: '明天是週一' },
		{ id: '004', title: '好消息！好消息！', content: '大樂透頭彩獎金十億' },
	]);
</script>

<style scoped>
	.news {
		padding: 0 20px;
		display: flex;
		justify-content: space-between;
		height: 100%;
	}
	.news ul {
		margin-top: 30px;
		padding-left: 10px;
	}
	.news li::marker {
		color: #64967e;
	}
	.news li > a {
		font-size: 18px;
		line-height: 40px;
		text-decoration: none;
		color: #64967e;
		text-shadow: 0 0 1px rgb(0, 84, 0);
	}
	.news-content {
		width: 70%;
		height: 90%;
		border: 1px solid;
		margin-top: 20px;
		border-radius: 10px;
	}
</style>
