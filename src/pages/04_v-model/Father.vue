<template>
	<div class="father">
		<h3>父元件</h3>
		<!-- <h4>{{ other }}</h4> -->
		<h4>{{ username }}</h4>
		<h4>{{ password }}</h4>
		<!-- v-model用在html標籤上 -->
		<!-- <input type="text" v-model="username"> -->
		<!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

		<!-- v-model用在元件標籤上 -->
		<!-- <AtguiguInput v-model="other"/> -->
		<!-- <AtguiguInput :modelValue="other" @update:modelValue="other = $event" /> -->

		<!-- 修改 modelValue 名稱 -->
		<AtguiguInput v-model:ming="username" v-model:mima="password" />
	</div>
</template>

<script setup lang="ts" name="Father">
	import { ref } from 'vue';
	import AtguiguInput from './AtguiguInput.vue';

	// let other = ref('other');
	let username = ref('zhansgan');
	let password = ref('123456');
</script>

<style scoped>
	.father {
		padding: 20px;
		background-color: rgb(165, 164, 164);
		border-radius: 10px;
	}
</style>
