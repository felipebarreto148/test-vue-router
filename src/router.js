import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Projetos from './components/pages/Projetos.vue';
import Contact from './components/pages/Contact.vue';

let router = new VueRouter({
    routes: [
        {path: '/', component: Home},
        {path: '/home', component: Home},
        {path: '/about', component: About},
        {path: '/projetos', component: Projetos},
        {path: '/contact', component: Contact},
    ]
});

export default router;