import { createApp } from 'vue'
import app from './App.vue'
import axios from 'axios'
import '../css/bootstrap.min.css'
import store from './store.js'

createApp(app)
   .use(store)
   .mount('#app')