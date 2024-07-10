<template>
	<div class="talk">
		<button @click="getLoveTalk">獲取一句情話</button>
		<ul>
			<li v-for="talk in talkStore.talkList" :key="talk.id">
				{{ talk.title }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="LoveTalk">
	import axios from 'axios';
	import { nanoid } from 'nanoid';
	import { useTalkStore } from '@/store/loveTalk';

	const talkStore = useTalkStore();

	const getLoveTalk = async () => {
		// 連續解構賦值 + 改名字
		let {
			data: { content: title },
		} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
		// 把請求回來的字符串轉成物件
		let obj = { id: nanoid(), title };
		talkStore.talkList.unshift(obj);
	};
</script>

<style scoped>
	.talk {
		background-color: orange;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 0 10px;
	}
</style>
