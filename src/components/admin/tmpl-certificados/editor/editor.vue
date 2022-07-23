<template>
    <div class="border p-2 rounded">
        oi
        <mtext @showMenu="showMenu" />
        <q-menu v-model="menu">
            <div>
                olá mundo
            </div>
        </q-menu>
    </div>
</template>

<script>
import mtext from "./text.vue"

export default {
    components: { mtext },
    data() {
        return {
            menu: false
        }
    },   
    methods: {
        
        showMenu(elem) {
            console.log("showMenu",elem);
        }
    },

}
</script>
<style lang="">
    
</style>