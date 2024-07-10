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
			talkList: [
				{ id: '001', title: '今天你有點怪，哪裡怪？怪好看的。' },
				{ id: '002', title: '草莓，藍莓，蔓越莓，今天想我沒？' },
				{ id: '003', title: '心裡給你留了一塊地，我的死心踏地。' },
			],
		};
	},
});
