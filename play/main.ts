import { createApp } from 'vue';
import App from './app.vue';
import sci from '@sci-fe/components';
const app = createApp(App);
app.use(sci);
app.mount('#app');
