<script setup>
    import { Icon } from "@iconify/vue"
</script>
<template>
<main>
    <div class="enlaces">
        <section class="head">
            <div class="img_tattooer"></div>
            <h2>{{ this.$store.state.currentUser.name }}</h2>
            <button @click="displayLogin">Guardar Cambios</button>
        </section>
    </div>
    <section class="misdatos">
        <div>
            <h3>Nombre</h3>
            <input type="text" id="name" :value="this.$store.state.currentUser.name" />
        </div>
        <div>
            <h3>Email</h3>
            <input type="text" id="email" :value="this.$store.state.currentUser.email" />
        </div>
    </section>
    <div class="informacion">
        <section class="info">
            <h3>Quienes somos</h3>
            <textarea id="info">{{this.$store.state.currentUser.info}}</textarea>
            <h3>Nuestros estilos favoritos</h3>
            <div class="estilos">
                <div>
                    <label for="#styles">Japones</label>
                    <input type="checkbox" name="japones" id="japones" v-model="Japones"/>
                </div> 
                <div>
                    <label for="#styles">Realista</label>
                    <input type="checkbox" name="realista" id="realista" v-model="Realista"/>
                </div>
                <div>
                    <label for="#styles">Cartoon</label>
                    <input type="checkbox" name="cartoon" id="cartoon" v-model="Cartoon"/>
                </div>
                <div>
                    <label for="#styles">OldSchool</label>
                    <input type="checkbox" name="oldschool" id="oldschool" v-model="OldSchool"/>
                </div>
                <div>
                    <label for="#styles">3D tattoo</label>
                    <input type="checkbox" name="3dtattoo" id="dtattoo" v-model="dtattoo"/>
                </div>
                <div>
                    <label for="#styles">Puntillismo</label>
                    <input type="checkbox" name="puntillismo" id="puntillismo" v-model="Puntillismo"/>
                </div>
                <div>
                    <label for="#styles">Blancos</label>
                    <input type="checkbox" name="blancos" id="blancos" v-model="Blancos"/>
                </div>
                <div>
                    <label for="#styles">Minimalismo</label>
                <input type="checkbox" name="minimalism" id="minimalism" v-model="Minimalismo"/>
                </div>
                <div>
                    <label for="#styles">NewSchool</label>
                    <input type="checkbox" name="newschool" id="newschool" v-model="NewSchool"/>
                </div>
                <div>
                    <label for="#styles">Blackwork</label>
                    <input type="checkbox" name="blackwork" id="blackwork" v-model="Blackwork"/>
                </div>
                <div>
                    <label for="#styles">Tribales</label>
                    <input type="checkbox" name="japones" id="japones" v-model="Tribales"/>
                </div>
                <div>
                    <label for="#styles">Geometrico</label>
                    <input type="checkbox" name="japones" id="japones" v-model="Geometrico"/>
                </div>
            </div>
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
                <input type="text" :value="this.$store.state.currentUser.tfno">
                <Icon icon="mdi:telephone" class="telephone"/>
            </div>
            <p class="redes">Nuestras redes</p>
            <div class="social">
                <div>
                    <Icon icon="mdi:twitter" class="social_icon"/> <input type="text" class="social_user" :value="this.$store.state.currentUser.twitter"/>
                </div>
                <div>
                    <Icon icon="ph:instagram-logo-fill" class="social_icon"/> <input type="text" class="social_user" :value="this.$store.state.currentUser.instagram"/>
                </div>
                <div>
                    <Icon icon="ic:baseline-facebook" class="social_icon"/> <input type="text" class="social_user" :value="this.$store.state.currentUser.facebook"/>
                </div>
            </div>
        </section>
    </div>
    <form action class="vuelve" id="formulario">
        <h3>Vuelva a iniciar sesion para aplicar los cambios</h3>
        <div>
            <label for="#email">Email:</label>
            <input
                type="email"
                id="email"
                required
                placeholder="Email"
            />
        </div>
        <div>
            <label for="#password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="Password"
            />
        </div>
        <input class="submit" type="submit" value="Login" />
    </form>
</main>
</template>
<script>
import NavigationTattooer from "../components/NavigationTattooer.vue";

export default{
    created(){
        this.$store.state.currentUser.styles.split(",").forEach(element => {
            if(element.trim() == "Japones"){
                this.Japones = true
            } 
            else if(element.trim() == "Realista"){
                this.Realista = true
            }
            else if(element.trim() == "OldSchool"){
                this.OldSchool = true
            }
            else if(element.trim() == "3DTattoo"){
                this.dtattoo = true
            }
            else if(element.trim() == "Puntillismo"){
                this.Puntillismo = true
            }
            else if(element.trim() == "Blancos"){
                this.Blancos = true
            }
            else if(element.trim() == "Minimalism"){
                this.Minimalismo = true
            }
            else if(element.trim() == "NewSchool"){
                this.NewSchool = true
            }
            else if(element.trim() == "Tribales"){
                this.Tribales = true
            }
            else if(element.trim() == "Geometrico"){
                this.Geometrico = true
            }
        })
    },
    data(){
        return({
            Japones: false,
            Realista: false,
            OldSchool: false,
            dtattoo: false,
            Puntillismo: false,
            Blancos: false,
            Minimalismo: false,
            NewSchool: false,
            Blackwork: false,
            Tribales: false,
            Geometrico: false,
            estilos: "",
            nuevo: {}
        })
    },
    components: { NavigationTattooer },
    methods:{
        save(){
            if(this.Japones === true){
                this.estilos += "Japones, "
            }
            if(this.Realista === true){
                this.estilos += "Realista, "
            }
            if(this.OldSchool === true){
                this.estilos += "OldSchool, "
            }
            if(this.dtattoo === true){
                this.estilos += "3D Tattoo, "
            }
            if(this.Puntillismo === true){
                this.estilos += "Puntillismo, "
            }
            if(this.Blancos === true){
                this.estilos += "Blancos, "
            }
            if(this.Minimalismo === true){
                this.estilos += "Minimalismo, "
            }
            if(this.NewSchool === true){
                this.estilos +="NewSchool, "
            }
            if(this.Blackwork === true){
                this.estilos += "Blackwork, "
            }
            if(this.Tribales === true){
                this.estilos += "Tribales, "
            }
            if(this.Geometrico === true){
                this.estilos += "Geometrico, "
            }
            this.estilos.slice(0,-2)
        },
        displayLogin(){
            document.getElementById('formulario').style.display = "flex"
        }
    }
}
</script>
<style scoped>
    @font-face{
        font-family: inter;
        src: url("../assets/inter.ttf");
    }
    .misdatos {
        width: 100%;
        padding: 20px;
        display: flex;
        justify-content: center;
    }
    .misdatos div{
        display: flex;
        width: 50%;
        flex-direction: column;
        align-items: center;
    }
    .misdatos div input{
        width: 80%;
        font-size: 15px;
    }
    textarea{
        width: 100%;
        height: 10vh;
        font-family: inter;
        margin-right: 5px;
    }
    input{
        font-family: inter;
        font-size: 20px;
    }
    main{
        min-height: 89vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .head{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
    .head button{
        background-color: #D9D9D9;
        border: 1;
        border-radius: 10px;
        color: inherit;
        line-height: normal;
        width: 30%;
    }
    .vuelve{
        display: none;
        background-color: #D9D9D9;
        width: 80%;
        height: 30vh;
        padding: 30px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        position: fixed;
        align-self: center; 
    }
    .vuelve div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    .vuelve div input{
        width: 50%;
    }
    .submit{
        width: 40%;
    }
    .img_tattooer{
        width: 100%;
        height: 18vh;
        background-color: #D9D9D9;
    }
    
    .head h2{
        padding: 10px;
        width: 30%;
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
    .tfno input{
        width: 70%;
        margin-left: 10px;
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
    .estilos{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .estilos div{
        width: 40%;
        text-align: end;
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
