import { defineStore } from 'pinia';
import axios from 'axios';
import { nanoid } from 'nanoid';

export const useTalkStore = defineStore('talk', {
	actions: {
		async getTalk() {
			// 連續解構賦值 + 改名字
			let {
				data: { content: title },
			} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');
			// 把請求回來的字符串轉成物件
			let obj = { id: nanoid(), title };
			this.talkList.unshift(obj);
		},
	},
	// 真正存儲數據的地方
	state() {
		return {
			talkList: JSON.parse(localStorage.getItem('talkList') as string) || [],
		};
	},
});
