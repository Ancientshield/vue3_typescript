import { onMounted, ref, computed } from 'vue';

export default function () {
	let sum = ref(0);
	const add = () => {
		sum.value += 1;
	};
	// 用計算屬性
	let bigSum = computed(() => {
		return sum.value * 10;
	});

	// 想一上來就加1
	onMounted(() => {
		add();
	});

	// 向外部提供數據，方法
	return { sum, add, bigSum };
}
