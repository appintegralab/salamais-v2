import { createWebHistory, createRouter } from 'vue-router';

import Formacoes from "./components/home/home.vue"
import Inscricoes from "./components/minhas-formacoes/minhas-formacoes.vue"
import Concluidas from "./components/concluidas/concluidas.vue"
import Formacao from "./components/formacao/formacao.vue"
import Profile from "./components/profile/profile.vue"
import AdminFormacoes from "./components/admin/formacoes/formacoes.vue"
import AdminUsuarios from "./components/admin/users/users.vue"
import AdminInscricoes from "./components/admin/inscricoes/inscricoes.vue"
import MailTest from "./components/admin/mail-test.vue"
import Facilitadores from "./components/admin/facilitadores/facilitadores.vue"
import Relatorios from "./components/admin/relatorios/relatorios.vue"
import Facilitador from "./components/facilitador/facilitador.vue"
import Sala from "./components/sala/sala.vue"

const routes = [
    { path: '/', component: Formacoes },
    { path: '/formacoes', component: Formacoes },
    { path: '/inscricoes', component: Inscricoes },
    { path: '/concluidas', component: Concluidas },
    { path: '/formacao/:id', component: Formacao },
    { path: '/profile/:id', component: Profile },
    { path: '/admin-formacoes', component: AdminFormacoes },
    { path: '/admin-usuarios', component: AdminUsuarios },
    { path: '/admin-inscricoes', component: AdminInscricoes },
    { path: '/admin-mail-test', component: MailTest },
    { path: '/admin-facilitadores', component: Facilitadores },
    { path: '/admin-relatorios', component: Relatorios },
    { path: '/facilitador', component: Facilitador },
    { path: '/sala/:id', component: Sala },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router