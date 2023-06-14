<script setup>
    import { Icon } from "@iconify/vue"
</script>
<template>
    <section class="head">
        <div class="img_tattooer"></div>
        <h2>Tatuador</h2>
        <div v-if="$store.state.loged" class="like">
            <button v-if="$store.state.favourites.includes(1)" @click="fav()"><Icon icon="il:heart" /></button>
            <button v-else @click="fav()"><Icon icon="mdi:heart-outline" /></button>
        </div>
    </section>
    <section>
        <NavigationTattooer />
    </section>
    <section class="info">
        <h3>Quienes somos</h3>
        <p>Texto informativo sobre el tatuador ............................................................................................................................ ..................................................................</p>
        <h3>Nuestros estilos favoritos</h3>
        <p>Texto informativo sobre el tatuador ............................................................................................................................. .................................................................</p>
    </section>
    <section class="tattooers">
        <h3>Tatuadores</h3>
        <div class="a_tattooers">
            <div v-for="(tattooer, i) in tattooers" :key="i" class="tattooers_profile">
            <div class="tattooer_profile">
                <div class="tattooer_icon">
                    <Icon icon="mdi:user" class="t_icon"></Icon>
                </div>
                {{ tattooer }}
            </div>
        </div>
        </div>
    </section>
    <section class="contact">
        <h3>Contacto e Información</h3>
        <div class="tfno">
            <p>678678687</p>
            <Icon icon="mdi:telephone" class="telephone"/>
        </div>
        <p class="redes">Nuestras redes</p>
        <div class="social">
            <div>
                <Icon icon="mdi:twitter" class="social_icon"/> <p class="social_user">@twitter</p>
            </div>
            <div>
                <Icon icon="ph:instagram-logo-fill" class="social_icon"/> <p class="social_user">@instagram</p>
            </div>
            <div>
                <Icon icon="ic:baseline-facebook" class="social_icon"/> <p class="social_user">@facebook</p>
            </div>
        </div>
    </section>
</template>
<script>
import NavigationTattooer from "../components/NavigationTattooer.vue";

export default{
    data() {
        return {
            tattooers: ["Jose", "Manuel", "Pedro"]
        };
    },
    components: { NavigationTattooer }
}
</script>
<style scoped>
    .head{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .head button{
        background: none;
        border: 0;
        color: inherit;
        line-height: normal;
        padding: 0;
        width: 100%;
    }
    .img_tattooer{
        width: 393px;
        height: 158px;
        background-color: #D9D9D9;
    }
    h2{
        padding: 10px;
        width: 80%;
    }
    .like{
        width: 10%;
    }
    .info{
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
    }
    .info h3{
        margin-bottom: 10px;
        font-size: 22px;
    }
    .info p{
        width: 100%;
        padding: 8px;
    }
    .a_tattooers{
        border: 1px solid #D9D9D9;
        min-height: 12vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .tattooer_icon{
        background-color: #D9D9D9;
        width: 56px;
        height: 56px;
        border-radius: 30px;
        color: #696969;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .t_icon{
        width: 40px;
        height: 40px;
    }
    .tattooer_profile{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .tattooers_profile{
        width: 30%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .tattooers h3{
        padding: 10px;
        font-size: 22px;
    }
    .contact h3{
        padding: 10px;
        font-size: 22px;
    }
    .tfno{
        border: 1px solid #D9D9D9;
        display: flex;
        justify-content: space-between;
        min-height: 6vh;
        align-items: center;
        margin-bottom: 10px;
    }
    .tfno p{
        width: 41%;
        text-align: center;
        font-size: 22px;
    }
    .telephone{
        width: 24px;
        height: 24px;
        margin-right: 40px;
    }
    .redes{
        font-size: 18px;
        padding: 10px;
        margin-left: 10px;
    }
    .social{
        border: 1px solid #D9D9D9;
        display: flex;
        flex-direction: column;
        margin-bottom: 35px;
    }
    .social div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 10px;
    }
    .social_icon{
        width: 22px;
        height: 22px;
    }
    .social_user{
        font-size: 18px;
        width: 50%;
    }
</style>
