import { createApp } from 'vue'
import App from './App.vue'
import '../css/bootstrap.min.css'
import store from './store.js'
import dotenv from 'dotenv'
//import InfiniteLoading from 'vue-infinite-loading';

dotenv.config();

createApp(App)
   .use(store)
   .mount('#app')