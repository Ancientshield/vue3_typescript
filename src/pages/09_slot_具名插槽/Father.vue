<template>
	<div class="father">
		<h3>父元件</h3>
		<div class="content">
			<Category>
				<template v-slot:s1>
					<h2>熱門遊戲列表</h2>
				</template>
				<template v-slot:s2>
					<ul>
						<li v-for="g in games" :key="g.id">{{ g.name }}</li>
					</ul>
				</template>
			</Category>

			<Category>
				<template v-slot:s2>
					<img :src="imgUrl" alt="" />
				</template>
				<!-- 模板排序是由插槽名決定，寫在下面也會呈現在上面 -->
				<template v-slot:s1>
					<h2>今日美食城市</h2>
				</template>
			</Category>

			<Category>
				<!-- #號是插槽的簡寫 -->
				<template #s1>
					<h2>今日影視推薦</h2>
				</template>
				<template #s2>
					<video video :src="videoUrl" controls></video>
				</template>
			</Category>
		</div>
	</div>
</template>

<script setup lang="ts" name="Father">
	import Category from './Category.vue';
	import { ref, reactive } from 'vue';

	let games = reactive([
		{ id: 'asgytdfats01', name: '英雄聯盟' },
		{ id: 'asgytdfats02', name: '王者榮耀' },
		{ id: 'asgytdfats03', name: '紅色警戒' },
		{ id: 'asgytdfats04', name: '星海爭霸' },
	]);
	let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg');
	let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4');
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
	.content {
		display: flex;
		justify-content: space-evenly;
	}
	img,
	video {
		width: 100%;
	}
	h2 {
		background-color: orange;
		text-align: center;
		font-size: 20px;
		font-weight: 800;
	}
</style>
