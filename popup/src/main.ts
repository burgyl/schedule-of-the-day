import { Component, createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import gAuthPlugin from 'vue3-google-oauth2';
import App from './App.vue'

const app = createApp(App);

app.use(ElementPlus);
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => app.component(key, component as Component));
app.use(gAuthPlugin, {
  clientId: import.meta.env.VITE_GAPI_CLIENT_ID,
  scope: 'https://www.googleapis.com/auth/calendar.readonly',
  prompt: 'consent',
  fetch_basic_profile: false
});

app.mount('#app');
