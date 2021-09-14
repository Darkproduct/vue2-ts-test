/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify)
const opts = {
    theme: {
        dark: true
    }
};

import App from '@/js/views/App.vue';

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(opts),
    render: h => h(App)
});

export default app;
