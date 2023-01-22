<script>
import {store} from '../store.js'
import AppCard from './AppCard.vue';
export default {
    components: {
        AppCard
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template lang="">
    <div>
        <div class="container-xl">
            <div class="row">
                <div class="col-12">
                    <h3>
                        Carte trovate:
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <AppCard v-for="(item, index) in store.CardsList" :key="index" :card="item"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .col-12 {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>