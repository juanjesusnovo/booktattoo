<template>
    <nav>
        <RouterLink to="/tattooer">Detalles</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <button @click="book">Pide cita</button>
    </nav>
</template>
<script>
    export default{
        methods:{
            book(){
                alert("Has solicitado una cita")
            }
        }
    }
</script>
<style scoped>
    nav{
        width: 100%;
        height: 53px;
        border: 1px solid #D9D9D9;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 10px;
    }
    a{
        color: black;
    }
    a:active{
        text-decoration:line-through;
    }
    a:link, a:visited {
        text-decoration: none;
    }
    button {
        background: none;
        border: 0;
        color: inherit;
        /* cursor: default; */
        font: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
    }
</style>