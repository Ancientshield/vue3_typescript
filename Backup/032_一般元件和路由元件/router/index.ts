// 引入 createRouter
import { createRouter, createWebHistory } from 'vue-router';

// 引入路由元件（由路由顯示的元件）
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import News from '@/views/News.vue';

// 創建路由器
const router = createRouter({
	history: createWebHistory(), // 路由器工作模式
	routes: [
		// 每一個路由的工作規則
		{
			path: '/home',
			component: Home,
		},
		{
			path: '/about',
			component: About,
		},
		{
			path: '/news',
			component: News,
		},
	],
});

export default router;
