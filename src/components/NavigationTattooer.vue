<template>
    <nav>
        <RouterLink to="/tattooer">Detalles</RouterLink>
        <RouterLink to="/portfolio">Portfolio</RouterLink>
        <RouterLink to="/book">Pide cita</RouterLink>
    </nav>
</template>
<script>
    export default{

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
</style>