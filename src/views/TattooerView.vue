<script setup>
    import { Icon } from "@iconify/vue"
</script>
<template>
<main>
    <div class="enlaces">
        <section class="head">
            <div class="img_tattooer">
                <img :src="this.imagen" alt="">
            </div>
            <h2>{{ this.tattooer.name }}</h2>
        </section>
        <section class="nav">
            <NavigationTattooer :id="this.$route.params.id"/>
        </section>
    </div>
    <div class="informacion">
        <section class="info">
            <h3>Quienes somos</h3>
            <p>{{ this.tattooer.info }}</p>
            <h3>Nuestros estilos favoritos</h3>
            <p>{{ this.tattooer.styles }}</p>
        </section>
    <!--     <section class="tattooers">
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
        </section> -->
        
        <section class="contact">
            <h3>Contacto e Información</h3>
            <div class="tfno">
                <p>{{ this.tattooer.tfno }}</p>
                <Icon icon="mdi:telephone" class="telephone"/>
            </div>
            <p class="redes">Nuestras redes</p>
            <div class="social">
                <div>
                    <Icon icon="mdi:twitter" class="social_icon"/> <p class="social_user">{{ this.tattooer.twitter }}</p>
                </div>
                <div>
                    <Icon icon="ph:instagram-logo-fill" class="social_icon"/> <p class="social_user">{{ this.tattooer.instagram }}</p>
                </div>
                <div>
                    <Icon icon="ic:baseline-facebook" class="social_icon"/> <p class="social_user">{{ this.tattooer.facebook }}</p>
                </div>
            </div>
        </section>
    </div>
</main>
</template>
<script>
import NavigationTattooer from "../components/NavigationTattooer.vue";
import axios from "axios";

export default{
    name: "tattooer",
    created(){
        this.getTattooer()
        axios.get(`https://apispringboot-production-5a7a.up.railway.app/images/${this.tattooer.picture}`)
        .then(response => this.imagen = response.data)
    },
    data(){
        return{
            tattooer: {},
            imagen: ""
        }
    },
    props: {
        tattooer_id: String
    },
    components: { NavigationTattooer },
    methods: {
        getTattooer(){
            // console.log(parseInt(this.$route.params.id))
            //console.log(this.$store.state.tattooers.find(t => t.id === parseInt(this.$route.params.id)));
            this.tattooer = this.$store.state.tattooers.find(t => t.id === parseInt(this.$route.params.id))
            console.log(this.tattooer);
        }
    }
}
</script>
<style scoped>
    main{
        min-height: 89vh;
    }
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
        width: 100%;
        height: 18vh;
        background-color: #D9D9D9;
        margin-bottom: 10px;
    }
    .img_tattooer img{
        width: 100%;
        height: 20vh;
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
    @media (min-width: 450px){
        .img_tattooer{
            height: 20vh;
        }
    }
    @media (min-width: 600px) {
        .img_tattooer{
            height: 23vh;
        }
        .info h3{
            margin-bottom: 10px;
            font-size: 27px;
        }
        h2{
            width: 100%;
            font-size: 30px;
        }
        .redes{
            font-size: 20px;
        }
    }
    @media(min-width: 800px){
        .head{
            width: 80%;
            padding: 20px;
        }
        .img_tattooer{
            height: 20vh;
        }
        .nav{
            width: 100%;
            padding: 20px;
            margin-bottom: 5vh;
        }
        .nav nav{
            height: 20vh;
        }
        .contact{
            width: 100%;
        }
        .enlaces{
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }
        main{
            display: flex;
            flex-wrap: wrap;
        }
        .informacion{
            width: 100%;
        }
    }
    @media(min-width: 1000px){
        .informacion{
            display: flex;
            flex-direction: row;
            justify-content: space-around
        }
        .info{
            width: 50%;
            border: 1px solid #D9D9D9;
            padding: 10px;
            height: 40vh;
        }
        .contact{
            width: 40%;
            border: 1px solid #D9D9D9;
            padding: 10px;
            height: 40vh;
        }
    }
</style>
