import { Component, createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Gapi from 'vue-googleapis'
import App from './App.vue'

const app = createApp(App);

app.use(ElementPlus);
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => app.component(key, component as Component));

app.use(Gapi, {
  apiKey: import.meta.env.VITE_GAPI_API_KEY,
  clientId: import.meta.env.VITE_GAPI_CLIENT_ID,
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: 'https://www.googleapis.com/auth/youtube.readonly',
})

app.mount('#app');
