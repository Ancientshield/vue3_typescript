import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
	// actions 內放置的是方法，用於響應元件調用動作
	// 有大量的商業邏輯，可以寫在 store，保持元件簡潔性。
	actions: {
		increment(value: number) {
			// this 就是 useCountStore
			this.sum += value;
		},
	},

	// 真正存儲數據的地方
	state() {
		return {
			sum: 6,
		};
	},
	getters: {
		bigSum(state) {
			return state.sum * 10;
		},
	},
});
