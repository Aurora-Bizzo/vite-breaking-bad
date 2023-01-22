import {reactive} from 'vue'
export const store = reactive({
    CardsList: [],
    url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Aroma'
});