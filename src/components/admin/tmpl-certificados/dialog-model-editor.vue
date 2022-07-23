<template>
    <q-dialog v-model="dialog" persistent :maximized="true" transition-show="slide-up" transition-hide="slide-down">
        <q-card class="bg-gray-100 text-black">
            <q-bar>
                <div>
                    <span class="iconify text-lg" data-icon="mdi:file-certificate-outline" data-inline="false"></span>
                </div>
                <div>
                    Editor de modelos de certificados
                </div>
                <q-space />
                <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                </q-btn>
            </q-bar>

            <div class="m-2 p-2 border rounded">
                <div class="grid grid-cols-2">
                    <div class="bg-gray-100 border rounded p-2 mx-2">
                        <div v-if="type == 'new'" class="font-medium">
                            Digite os dados do NOVO modelo
                        </div>
                        <div v-if="type == 'edit'" class="font-medium">
                            ALTERAÇÃO dos dados do modelo
                        </div>
                        <hr class="mb-3" />
                        <mform :model="model" @onSave="onSave" @onChange="change" />
                    </div>
                    <div class="bg-gray-100 border rounded p-2 mx-2">
                        <div class="text-sm text-gray-400">
                            Pré visualização
                        </div>
                        <div class="w-[460px] h-[310px] border p-1">
                            <img class="w-full h-full" :src="model.fields.urlImage.value" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </q-card>
    </q-dialog>
</template>

<script>
import mform from "@/components/m-forms/m-form.vue"
import { Model, string, number } from "@/components/m-forms/m-models"

export default {
    components: { mform },
    data() {
        return {
            dialog: false,
            model: null,
            type: "new"
        }
    },
    mounted() {
        let fields = {
            nome: {
                type: "text", name: "nome", default: "",
                label: "Nome do aluno", holder: "Digite nome do aluno",
                yupRules: string().trim().required()
            },
            urlImage: {
                type: "image", name: "urlImage", default: "https://firebasestorage.googleapis.com/v0/b/prj-salamais-prd.appspot.com/o/certificados%2Fcertificado-v2.png?alt=media&token=37c4e7ce-8024-4ecc-b2f1-7018158f8557",
                label: "Imagem de fundo do certificado", holder: "url da imagem",
                width: "100px", height: "60px", pathToSave: "/teste2/",
                yupRules: string().trim().required()
            },
            idade: {
                type: "text", name: "idade", default: "",
                label: "Idade do aluno", holder: "Digite a idade do aluno",
                yupRules: number().required().positive().integer(),
            },
            email: {
                type: "text", name: "email", default: "",
                label: "Email do aluno", holder: "Digite um email válido",
                yupRules: string().required().email(),
            }
        }
        this.model = Model.init(fields)
        console.log("model", this.model.fields);
    },
    methods: {
        show(elem) {

            if (elem == undefined) {
                this.model.reset()
                this.type = "new"
            } else {
                this.model.setValues(elem)
                this.type = "edit"
            }
            this.dialog = true
        },

        onSave(data) {
            console.log("onSave", data);
        },

        change(value) {
            //console.log("onChange", value);
        },

    },
}
</script>
<style lang="">
    
</style>