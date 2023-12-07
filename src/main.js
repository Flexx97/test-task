import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import { createServer } from "miragejs"
import api from '@/server/api.js'
import axios from 'axios'

import App from './App.vue'
import router from './router'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_API

if (process.env.NODE_ENV === 'development') {
    createServer(api)
}

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
