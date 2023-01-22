<script>
import AppCardGrid from './AppCardGrid.vue'

export default {
    components:{
        AppCardGrid
    }
}

</script>

<template lang="">
    <main>
        <AppCardGrid/>
    </main>
</template>

<style lang="scss" scoped>
    
    main {
        background-image: url(../assets/background.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 260px;
    }

</style>