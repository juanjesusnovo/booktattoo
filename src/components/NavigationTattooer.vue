<template>
    <nav>
        <button @click="goDetalles">Detalles</button>
        <button @click="book" v-if="this.$store.state.loged">Pide cita</button>
    </nav>
</template>
<script>
    import axios from 'axios'

    export default{
        props: {
            id: Number
        },
        methods:{
            async book(){
                alert("Has solicitado una cita")
                await axios.post("https://apispringboot-production-5a7a.up.railway.app/book",{
                    user: this.$store.state.currentId,
                    tattooer: this.id
                },
                {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }}
                ).then(res=> console.log(res))
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