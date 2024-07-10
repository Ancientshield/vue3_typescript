import { defineStore } from 'pinia';

export const useTalkStore = defineStore('talk', {
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
