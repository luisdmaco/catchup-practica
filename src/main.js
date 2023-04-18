import { createApp } from 'vue'
import App from './App.vue'
//import i18n from '@/i18n';
import PrimeVue from "primevue/config";

//App Theme
//indigo light theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
//minimal css resource
import 'primevue/resources/primevue.min.css';
//prime icons
import 'primeicons/primeicons.css';

//Add Primeflex
import 'primeflex/primeflex.css';

//Add Components
import Card from "primevue/card";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import SelectButton from "primevue/selectbutton";
import Toolbar from "primevue/toolbar";

createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .mount('#app');
