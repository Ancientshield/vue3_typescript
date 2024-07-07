<template>
	<div class="person">
		<h1>情況二：監視 ref 定義的物件類型數據</h1>
		<h2>姓名：{{ person.name }}</h2>
		<h2>年齡：{{ person.age }}</h2>
		<button @click="changeName">修改名字</button>
		<button @click="changeAge">修改年齡</button>
		<button @click="changePerson">修改人</button>
	</div>
</template>

<script lang="ts" setup name="Person">
	import { ref, watch } from 'vue';

	let person = ref({
		name: '張三',
		age: 18,
	});
	// 若修改的是 ref 定義物件中的屬性，newVal 和 oldVal 都是新值，因為是同一個物件
	const changeName = () => {
		person.value.name += '~';
	};
	// 若修改的是 ref 定義物件中的屬性，newVal 和 oldVal 都是新值，因為是同一個物件
	const changeAge = () => {
		person.value.age += 1;
	};
	// 若修改整個 ref 物件，newVal 是新值，oldVal 是舊值，因為不是同一個物件了。
	const changePerson = () => {
		person.value = { name: '李四', age: 90 };
	};

	// 監視的是 ref 定義的 Object 數據和 Proxy
	watch(
		person,
		(newVal, oldVal) => {
			console.log('person變化', newVal, oldVal);
			// button 修改名字 修改年齡 不會打印
		},
		{ deep: true } // 若想監視物件內部屬性變化，需要開啟深度監視
		// deep:true 後， button 修改名字 修改年齡 會打印
		// { immidiate: true } 載入 component 時就立即監視
	);
</script>

<style scoped>
	.person {
		background-color: skyblue;
		box-shadow: 0 0 10px;
		border-radius: 10px;
		padding: 20px;
	}
	button {
		margin: 0 5px;
		font-size: 20px;
	}
	li,
	label,
	input,
	span {
		font-size: 20px;
	}
</style>
