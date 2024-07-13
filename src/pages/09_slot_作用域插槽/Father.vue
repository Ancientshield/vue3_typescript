<template>
	<div class="father">
		<h3>父元件</h3>
		<div class="content">
			<Game>
				<!-- params = { youxi: games, x: '哈哈', y: '你好'} -->
				<template v-slot="params">
					<ul>
						<li v-for="y in params.youxi" :key="y.id">
							{{ y.name }}
						</li>
					</ul>
					<div>{{ params.x }}：{{ params.y }}</div>
				</template>
			</Game>

			<Game>
				<template v-slot="params">
					<ol>
						<li v-for="item in params.youxi" :key="item.id">
							{{ item.name }}
						</li>
					</ol>
				</template>
			</Game>

			<Game>
				<!-- default 如果改了，子元件的作用域插槽就要 name 屬性 -->
				<template v-slot:default="{ youxi }">
					<h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
				</template>
			</Game>
		</div>
	</div>
</template>

<script setup lang="ts" name="Father">
	import Game from './Game.vue';
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
</style>
