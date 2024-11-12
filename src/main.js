import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Material from '@primevue/themes/material';
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';

// Create the app instance
const app = createApp(App);

// Use PrimeVue and router
app.use(PrimeVue, {
    theme: {
        preset: Material
    }
});
app.use(router);

// Mount the app
app.mount('#app');
