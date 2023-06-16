<template>
    <nav>
        <button @click="goDetalles">Detalles</button>
        <button @click="goPortfolio">Portfolio</button>
        <button @click="book" v-if="this.$store.state.loged">Pide cita</button>
    </nav>
</template>
<script>
    export default{
        props: {
            id: Number
        },
        methods:{
            book(){
                alert("Has solicitado una cita")
            },
            goDetalles(){
                this.$router.push(`/tattooer/${this.id}`)
            },
            goPortfolio(){
                this.$router.push(`/portfolio/${this.id}`)
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
    @media(min-width: 800px){
        nav{
            display: flex;
            width: 100%;
        }
    }
</style>