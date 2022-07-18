<template>
    <span v-if="enabled">
        <q-btn round flat>
            <q-avatar size="26px">
                <span class="iconify text-[16pt]" data-icon="ic:twotone-settings" data-inline="false"></span>
            </q-avatar>
            <q-tooltip :delay="1200">Administração do Sala Mais</q-tooltip>
            <q-menu v-model="menuShow">
                <div class="min-w-[260px] p-2">
                    <div class="flex items-center">
                        <div class="mr-2 p-1">
                            <q-avatar size="34px" class="bg-gray-200">
                                <img class="" src="@/assets/salamais-icon.png">
                            </q-avatar>
                        </div>
                        <div class="flex-1 ellipsis">
                            <div class="finter text-[8pt] fw-700">
                                Administração do Sala Mais
                            </div>
                            <div class="border-t my-2"></div>
                            <div @click="menuShow=false; $router.push({path:'/admin-formacoes'})" class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="ic:twotone-edit-calendar" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Formações
                                </div>
                            </div>
                            <div @click="menuShow=false; $router.push({path:'/admin-inscricoes'})" class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="wpf:renew-subscription" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Controle de Inscrições
                                </div>
                            </div>
                            <div @click="menuShow=false; $router.push({path:'/admin-facilitadores'})" class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="mdi:school" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Facilitadores
                                </div>
                            </div>
                            <div class="border-t my-1"></div>
                            <div @click="menuShow=false; $router.push({path:'/admin-relatorios'})" class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="clarity:export-outline-badged" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Relatórios
                                </div>
                            </div>
                            <div class="border-t my-1"></div>
                            <div @click="menuShow=false; $router.push({path:'/admin-usuarios'})" class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="ic:people" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Usuários
                                </div>
                            </div>
                            <div class="border-t my-1"></div>
                            <div @click="menuShow=false; $router.push({path:'/admin-mail-test'})" class="flex items-center p-1 hover:bg-gray-200 cursor-pointer">
                                <div class="h-[20px] fs-12pt">
                                    <span class="iconify" data-icon="ic:mail" data-inline="false"></span>
                                </div>
                                <div class="text-xs ml-1 flex-1 ellipsis">
                                    Testar envio email
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </q-menu>
        </q-btn>
    </span>
</template>

<script>
import { userStore } from "../stores/user-store"

export default {
    data() {
        return {
            menuShow: false,
            userStore: userStore(),
            enabled: false
        }
    },
    computed: {
        user() {
            return this.userStore.user
        }
    },
    watch: {
        'userStore.user': function (newValue) {
            //console.log("watch store", this.userStore.user);
            this.checkEnabled()
            this.$forceUpdate();
        }
    },
    mounted() {
        //console.log("userbtn mounted");
    },
    methods: {
        checkEnabled() {
            let cpf = this.userStore.user.cpf
            //console.log(cpf);
            let lista = [ "18374109840", "28854077860", "99271176804", "12345678900", "36126741889"  ]
            if(lista.lastIndexOf(cpf) != -1) {
                this.enabled = true
            } else {
                this.enabled = false
            }
        }
    }
}
</script>

<style>
</style>