<template>
    <div class="all">
        <section class="user_profile">
            <div></div>
            <p>Mi nombre</p>
        </section>
        <section>
            <NavigationUser v-if="!$store.state.istattooer"/>
        </section>
        <section class="info_user" v-if="!$store.state.istattooer">
            <div class="info">
                <p>Nombre</p>
                <p>{{ this.$store.state.currentUser.name }}</p>
            </div>
            <div class="info">
                <p>Apellidos</p>
                <p>{{ this.$store.state.currentUser.surname }}</p>
            </div>
            <div class="info">
                <p>Nombre de Usuario</p>
                <p>{{ this.$store.state.currentUser.username }}</p>
            </div>
            <div class="info">
                <p>Email</p>
                <p>{{ this.$store.state.currentUser.email }}</p>
            </div>
            <div class="info">
                <p>Foto de perfil</p>
                <img :src="this.img" alt="1" class="pfp">
            </div>
        </section>
    </div>
</template>
<script setup>
    import NavigationUser from '../components/NavigationUser.vue'
</script>
<script>
    import axios from 'axios';
    export default{
        created(){
            axios.get(`https://apispringboot-production-5a7a.up.railway.app/images/${this.$store.state.currentUser.picture}`)
            .then(res => this.img = res)
        },
        data(){
            return{
                img: ""
            }
        }
    }
</script>
<style scoped>
    .all{
        min-height: 94vh;
    }
    nav{
        margin-bottom: 0;
    }
    .user_profile{
        display: flex;
    }
    .user_profile div{
        background-color: #d9d9d9;
        width: 100%;
        min-height: 20vh;
    }
    .user_profile p{
        position: absolute;
        font-size: 27px;
        width: 100%;
        align-self: flex-end;
        left: 20px;
    }
    .info_user{
        border: 1px solid #D9D9D9;
    }
    .info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
    }
    .info p{
        font-size: 20px;
    }
    .pfp{
       width: 152px;
       height: 100px; 
    }
</style>