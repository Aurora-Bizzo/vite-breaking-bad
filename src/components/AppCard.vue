<script>
export default {
    props:{
        card: Object
    }
}
</script>

<template lang="">
    <div class="card" style="width: 13rem;">
        <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{card.name}}</h5>
            <p class="card-text">{{card.type}}</p>
        </div>
    </div>
</template>

<style lang="scss">

    h5 {
        text-transform: uppercase;
    }
    
    .card {
        margin: 1rem;
        background-color: #0000008f;
        box-shadow: 15px 15px 20px black; 
    }

    .card-title, .card-text, h3 {
        text-align: center;
        background-image: linear-gradient(
        to right,
        #764127 0,
        #cb9b51 22%, 
        #f6e27a 45%,
        #f6f2c0 50%,
        #f6e27a 55%,
        #cb9b51 78%,
        #764127 100%
        );
        color:transparent;
        -webkit-background-clip:text;
    }

</style>