import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css'
import './plugins/firebase.js'
import router from './router';

const app = createApp(App);
app.use(router);
app.mount('#app');
