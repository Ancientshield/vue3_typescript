import { defineStore } from 'pinia';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { reactive } from 'vue';

// 組合式 store 第二個參數要使用箭頭函式
export const useTalkStore = defineStore('talk', () => {
	const talkList = reactive(
		JSON.parse(localStorage.getItem('talkList') as string) || []
	);
	const getTalk = async () => {
		let {
			data: { content: title },
		} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');

		let obj = { id: nanoid(), title };
		talkList.unshift(obj);
	};
	return { talkList, getTalk };
});
