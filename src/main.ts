import { createApp } from 'vue'
import App from './App.vue'
//import axios from 'axios'
import '../css/bootstrap.min.css'
import store from './store.js'
import dotenv from 'dotenv';

dotenv.config();

createApp(App)
   .use(store)
   .mount('#app')