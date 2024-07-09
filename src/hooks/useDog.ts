import { onMounted, reactive } from 'vue';
import axios from 'axios';

export default function () {
	let dogList = reactive([
		'https://images.dog.ceo/breeds/pembroke/n02113023_6826.jpg',
	]);
	const getDog = async () => {
		try {
			let result = await axios.get(
				'https://dog.ceo/api/breed/pembroke/images/random'
			);
			dogList.push(result.data.message);
		} catch (error) {
			alert(error);
		}
	};
	// 想要一上來就加一隻狗
	onMounted(() => {
		getDog();
	});
	// 向外部提供數據和方法
	return { dogList, getDog };
}
