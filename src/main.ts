import "bulma/css/bulma.css";
import "./assets/styles.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.isCustomElement = tag => tag.startsWith('ion-');
app.use(createPinia())
app.use(router)

app.mount('#app')