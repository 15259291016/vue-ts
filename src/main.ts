import {createApp} from 'vue'
import Vue from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import {store, key} from "@/store";
import axiosInstance from "./util/axios/index"

const app = createApp(App)
app.config.globalProperties.$http = axiosInstance
app.use(router).use(store, key).mount('#app')
