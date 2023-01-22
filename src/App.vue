<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './store.js';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  created(){
    this.getCardsList();
  },
  methods: {
    getCardsList(){
      axios.get(store.url).then((response) => {
        store.CardsList = response.data.data;
      });
    }
  },
}
</script>

<template lang="">
  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss">
  @use './styles/generals.scss'
</style>