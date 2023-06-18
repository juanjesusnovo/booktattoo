<script setup>
    import { Icon } from "@iconify/vue"
    import NavigationUser from '../components/NavigationUser.vue';
</script>
<template>
    <div>
        <section>
            <NavigationUser v-if="$store.state.isUser"/>
        </section>
        <section class="books">
            <div class="book" v-for="book in books">
                <Icon icon="material-symbols:calendar-month" class="icon"/>
                <p v-if="book.pending">Pendiente</p>
                <p v-else>{{ book.date }}</p>
                <div v-if="!this.$store.state.isUser">
                    <input type="date" v-model="fecha">
                    <button @click="citar(book.user)">Dar cita</button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import axios from "axios"
    
    export default{
        created(){
            if(this.$store.state.isUser == true){
                axios.get("https://apispringboot-production-5a7a.up.railway.app/bookUser/"+this.$store.state.currentId)
                .then(res => this.books = res.data)
            }
            else{
                axios.get("https://apispringboot-production-5a7a.up.railway.app/bookTattooer/"+this.$store.state.currentId)
                .then(res => this.books = res.data)
            }
        },
        data(){
            return{
                books: [],
                fecha: ""
            }
        },
        methods:{
            async citar(id){
                await axios.get("https://apispringboot-production-5a7a.up.railway.app/users/"+id, `Bearer ${localStorage.getItem("token")}`)
                .then(res=> {
                    this.darCita(res.data)
                })
            },
            async darCita(user){
                await axios.post("https://apispringboot-production-5a7a.up.railway.app/createBook/",{
                    user: user,
                    tattooer: this.$store.state.currentUser,
                    date: this.fecha
                }, `Bearer ${localStorage.getItem("token")}`)
            }
        }
    }

</script>
<style scoped>
    div{
        min-height: 86vh;
    }
    section{
        margin-top: 20px;
        width: 100%;
    }
    .books{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .book{
        margin-top: 60px;
        min-height: 10vh;
        border: 1px solid #D9D9D9;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
    }
    .icon{
        width: 49px;
        height: 46px;
    }
    p{
        font-size: 25px;
    }
    @media(min-width: 800px){
        .book{
            width: 45%;
        }
    }
</style>