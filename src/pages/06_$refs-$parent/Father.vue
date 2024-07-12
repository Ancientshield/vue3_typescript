<template>
	<div class="father">
		<h3>父元件</h3>
		<h4>房產：{{ house }}</h4>
		<button @click="changeToy">修改Child1的玩具</button>
		<button @click="changeComputer">修改Child2的電腦</button>
		<!-- $refs 所有子元件的實體物件 -->
		<button @click="getAllChild($refs)">讓所有孩子的書變多</button>
		<Child1 ref="c1" />
		<Child2 ref="c2" />
	</div>
</template>

<script setup lang="ts" name="Father">
	import Child1 from './Child1.vue';
	import Child2 from './Child2.vue';
	import { ref, reactive } from 'vue';
	let c1 = ref();
	let c2 = ref();

	// 當訪問 obj.c 的時候，底層會自動讀取 value 屬性，因為 c 是 obj 響應式物件內的值
	/* let obj = reactive({
		a:1,
		b:2,
		c:ref(3)
	})
	let x = ref(4)

	console.log(obj.a)
	console.log(obj.b)
	console.log(obj.c)
	console.log(x) */

	let house = ref(6);

	const changeToy = () => {
		c1.value.toy = '凱蒂貓';
	};
	const changeComputer = () => {
		c2.value.computer = '華為';
	};
	// 這裡不用寫 $ 符號
	// const getAllChild = (refs: { [key: string]: any }) => {
	const getAllChild = (refs: any) => {
		// console.log(refs);
		for (let key in refs) {
			refs[key].book += 3;
		}
	};
	// 向外部提供數據
	defineExpose({ house });
</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>
