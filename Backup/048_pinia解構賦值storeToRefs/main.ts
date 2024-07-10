import { createApp } from 'vue';
import App from './App.vue';

// 引入 pinia
import { createPinia } from 'pinia';

const app = createApp(App);

// 創建 pinia
const pinia = createPinia();

// 使用 pinia
app.use(pinia).mount('#app');
