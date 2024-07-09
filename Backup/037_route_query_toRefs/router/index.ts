// 引入 createRouter
import { createRouter, createWebHistory } from 'vue-router';

// 引入路由元件（由路由顯示的元件）
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import News from '@/views/News.vue';
import Detail from '@/views/Detail.vue';

// 創建路由器
const router = createRouter({
	history: createWebHistory(), // 路由器工作模式
	routes: [
		// 每一個路由的工作規則
		{
			name: '首頁',
			path: '/home',
			component: Home,
		},
		{
			name: '關於',
			path: '/about',
			component: About,
		},
		{
			name: '新聞',
			path: '/news',
			component: News,
			children: [
				{
					// 子連結不用寫斜槓
					path: 'detail',
					component: Detail,
				},
			],
		},
	],
});

export default router;
