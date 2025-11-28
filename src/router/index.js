import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../plugins/firebase'; // importa o Firebase Auth

import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import Registro from '../pages/Registro.vue';
import Dashboard from '../pages/Dashboard.vue';
import Portugues from '../pages/Portugues.vue';
import Matemática from '../pages/Matematica.vue';
import Química from '@/pages/Química.vue';
import Sociologia from '@/pages/Sociologia.vue';
import EducaçãoFísica from '@/pages/EducaçãoFísica.vue';
import Física from '../pages/Física.vue';
import Filosofia from '../pages/Filosofia.vue';
import Geografia from '@/pages/Geografia.vue';
import História from '@/pages/História.vue';
import Inglês from '@/pages/Inglês.vue';
import Biologia from '@/pages/Biologia.vue';
import Literatura from '@/pages/Literatura.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/registro', component: Registro },
  { 
    path: '/dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true }   // rota protegida
  },
  {path: '/portugues', component: Portugues},
  {path: '/Matemática', component: Matemática},
  {path: '/História', component: História},
  {path: '/Física', component: Física},
  {path: '/Filosofia', component: Filosofia},
  {path: '/Geografia', component: Geografia},
  {path: '/Literatura', component: Literatura},
  {path: '/Inglês', component: Inglês},
  {path: '/Química', component: Química},
  {path: '/Biologia', component: Biologia},
  {path: '/Sociologia', component: Sociologia},
  {path: '/Educação Física', component: EducaçãoFísica},

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
