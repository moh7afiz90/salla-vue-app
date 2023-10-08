import { createApp } from 'vue'
import App from './App.vue'
import { defineCustomElements } from 'salla-checkout/loader';

defineCustomElements(window);
createApp(App).mount('#app')
