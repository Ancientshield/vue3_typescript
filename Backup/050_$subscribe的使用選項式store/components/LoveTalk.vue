<template>
	<div class="talk">
		<button @click="getLoveTalk">獲取一句情話</button>
		<ul>
			<li v-for="talk in talkList" :key="talk.id">
				{{ talk.title }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts" name="LoveTalk">
	import { useTalkStore } from '@/store/loveTalk';
	import { storeToRefs } from 'pinia';

	const talkStore = useTalkStore();
	// 精簡面板並且保持響應性，storeToRefs 只會關注 store 內的數據，不會對方法做 ref 包裹
	const { talkList } = storeToRefs(talkStore);

	talkStore.$subscribe((mutate, state) => {
		console.log('talkStore內保存的數據發生變化', mutate, state);
		localStorage.setItem('talkList', JSON.stringify(state.talkList));
	});

	const getLoveTalk = async () => {
		talkStore.getTalk();
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
