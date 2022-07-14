import { Component, createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'

const app = createApp(App);

app.use(ElementPlus);
Object.entries(ElementPlusIconsVue).forEach(([key, component]) => app.component(key, component as Component));

app.mount('#app');
