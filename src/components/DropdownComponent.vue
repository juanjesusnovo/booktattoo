<script setup>
    import { Icon } from "@iconify/vue"
</script>
<template>
    <label class="menu" for="menuDesplegable">
        <div class="userIcon">
            <Icon icon="mdi:user" class="user"/>
        </div>
        <input class="menuCheck" type="checkbox" id="menuDesplegable"/>
        <ul class="menuDesplegado" v-if="$store.state.loged">
            <li v-if="$store.state.isUser"><RouterLink  to="/profile" @click="check">Perfil</RouterLink></li>
            <li v-else><RouterLink  to="/tattooer" @click="check">Perfil</RouterLink></li>
            <li><RouterLink  to="/favourites" @click="check">Favoritos</RouterLink></li>
        </ul>
        <ul class="menuDesplegado" v-else>
            <li><RouterLink  to="/login" @click="check">Iniciar Sesion</RouterLink></li>
            <li><RouterLink  to="/register" @click="check">Registrarse</RouterLink></li>
        </ul>
    </label>
</template>
<script>
    export default{
        methods: {
            check(){
                document.querySelector("#menuDesplegable").checked = false
            }
        }
    }
</script>
<style scoped>
    .menuCheck[type=checkbox]{
        display: none
    }
    .menuDesplegado {
        display: none;
        flex-direction: column;
        position: absolute;
        margin-top: 10%;
        background-color: #696969;
        padding: 10px;
        transition: all .5s ease-in;
    }
    .menuCheck[type=checkbox]:checked ~ .menuDesplegado{
        display: flex;
    }
    .userIcon{
        width: 26px;
        height: 26px;
        background-color: #D9D9D9;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
    }
    .user{
        color: #696969;
    }
    .menuDesplegado a {
        color: black;
        text-align: end;
        margin-right: 10px;
    }
    .menuDesplegado a:active{
        text-decoration:line-through;
    }
    .menuDesplegado a:link, a:visited {
        text-decoration: none;
    }
</style>