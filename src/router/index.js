import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../plugins/firebase'; // importa o Firebase Auth

import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Registro from '../pages/Registro.vue';
import Dashboard from '../pages/Dashboard.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/registro', component: Registro },
  { 
    path: '/dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true }   // rota protegida
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware de proteção
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !user) {
    next('/login');  // bloqueia dashboard para quem não está logado
  } else {
    next();
  }
});

export default router;
