// 引入 createApp 創建應用
import { createApp } from 'vue';
// 引入 App.vue 根元件
import App from './App.vue';
// 引入路由器
import router from './router';

// 創建一個 app 應用
const app = createApp(App);

// 使用路由器並掛載應用到app容器中。
app.use(router).mount('#app');
