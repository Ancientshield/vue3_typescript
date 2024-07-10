<template>
	<div class="talk">
		<button @click="getLoveTalk">獲取一句情話</button>
		<ul>
			<li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="LoveTalk">
	import { reactive } from 'vue';
	import axios from 'axios';
	import { nanoid } from 'nanoid';
	let talkList = reactive([
		{ id: '001', title: '今天你有點怪，哪裡怪？怪好看的。' },
		{ id: '002', title: '草莓，藍莓，蔓越莓，今天想我沒？' },
		{ id: '003', title: '心裡給你留了一塊地，我的死心踏地。' },
	]);

	const getLoveTalk = async () => {
		// 連續解構賦值 + 改名字
		let {
			data: { content: title },
		} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
		// 把請求回來的字符串轉成物件
		let obj = { id: nanoid(), title };
		talkList.unshift(obj);
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
