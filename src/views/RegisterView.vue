<template>
    <div class="login">
        <h1 class="title">Registrese</h1>
        <img class="logobk" src="../assets/logoblanco.png" alt="logo booktattoo">
        <video src="../assets/videotattoo1.mp4" autoplay="true" muted="true" loop="true"></video>
        <div class="elegir" id="elegir">
            <h3>¿Cómo quiere registrarse?</h3>
            <button @click="displayUser">Usuario</button>
            <button @click="displayTattooer">Empresa</button>
        </div>
        <form action class="user" id="user">
            <div>
                <label for="#email">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    required
                    placeholder="Nombre"
                    v-model="name"
                />
            </div>
            <div>
                <label for="#email">Apellido:</label>
                <input
                    type="text"
                    id="surname"
                    required
                    placeholder="Apellido"
                    v-model="surname"
                />
            </div>
            <div>
                <label for="#email">Username:</label>
                <input
                    type="text"
                    id="username"
                    v-model="username"
                    required
                    placeholder="Username"
                />
            </div>
            <div>
                <label for="#email">Email:</label>
                <input
                    type="email"
                    id="email"
                    required
                    placeholder="Email"
                    v-model="emailUser"
                />
                <p v-if="!validEmail" class="error">El correo debe ser un correo válido</p>
            </div>
            <div>
                <label for="#password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    v-model="passwordUser"
                    required
                />
                <p v-if="!validPass" class="error">La contraseña debe ser de 8 a 24 caracteres y debe incluir mayúsculas y minúsculas, un número y un caracter especial, (caracteres especiales permitidos [!,@,#,$,%])</p>
            </div>
            <div>
                <label for="#password">Repite Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                />
            </div>
            <input class="submit" type="submit" value="Register" @click="checkForm(false)"/>
            <RouterLink to="/login" @click="allOff">Ya tienes cuenta? Inicie sesión aquí!</RouterLink>
        </form>
        <form class="user" id="tattooer">
            <div>
                <label for="#email">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    v-model="name"
                    required
                    placeholder="Nombre"
                />
            </div>
            <div class="error1">
                <label for="#email">Email:</label>
                <input
                    type="email"
                    id="email"
                    v-model="email"
                    required
                    placeholder="Email"
                />
                <p v-if="!validEmail" class="error">El correo debe ser un correo válido</p>
            </div>
            <div class="error1">
                <label for="#password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    v-model="password"
                    placeholder="Password"
                    required
                />
                <p v-if="!validPass" class="error">La contraseña debe ser de 8 a 24 caracteres y debe incluir mayúsculas y minúsculas, un número y un caracter especial, (caracteres especiales permitidos [!,@,#,$,%])</p>
            </div>
            <div>
                <label for="#password">Repite Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                />
            </div>
            <div>
                <label for="#email">Información:</label>
                <input
                    type="text"
                    id="info"
                    v-model="info"
                    required
                    placeholder="Información"
                />
            </div>
            <div>
                <label for="#email">Teléfono:</label>
                <input
                    type="text"
                    id="tfno"
                    v-model="tfno"
                    required
                    placeholder="Teléfono"
                />
            </div>
            <div>
                <label for="#email">Twitter:</label>
                <input
                    type="text"
                    id="twitter"
                    v-model="twitter"
                    required
                    placeholder="Twitter"
                />
            </div>
            <div>
                <label for="#email">Instagram:</label>
                <input
                    type="text"
                    id="instagram"
                    v-model="instagram"
                    required
                    placeholder="Instagram"
                />
            </div>
            <div>
                <label for="#email">Facebook:</label>
                <input
                    type="text"
                    id="facebook"
                    v-model="facebook"
                    required
                    placeholder="Facebook"
                />
            </div>
            <div>
                <label for="#email">Imagen de perfil:</label>
                <input
                    type="file"
                    id="pictureTattooer"
                />
            </div>
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
                    <input type="checkbox" name="3dtattoo" id="3dtattoo" v-model="dtattoo"/>
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
            <input class="submit" type="submit" value="Register" @click="checkForm(true)"/>
            <RouterLink to="/login" @click="allOff">Ya tienes cuenta? Inicie sesión aquí!</RouterLink>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'

    export default {
        data(){
            return({
                name: "",
                nameUser: "",
                surname: "",
                username: "",
                email: "",
                emailUser: "",
                password: "",
                passwordUser: "",
                picture: "",
                pictureUser: "",
                info: "",
                styles: "",
                tfno: "",
                twitter: "",
                instagram: "",
                facebook: "",
                validPass: true,
                validEmail: true,
                Japones: false,
                Realista: false,
                Cartoon: false,
                OldSchool: false,
                dtattoo: false,
                Puntillismo: false,
                Blancos: false,
                Minimalismo: false,
                NewSchool: false,
                Blackwork: false,
                Tribales: false,
                Geometrico: false,
                estilos: ""
            })
        },
        methods:{
            displayUser(){
                document.getElementById('elegir').style.display = "none"
                document.getElementById('user').style.display = "flex"
            },
            displayTattooer(){
                document.getElementById('elegir').style.display = "none"
                document.getElementById('tattooer').style.display = "flex"
            },
            allOff(){
                document.getElementById('user').style.display = "none"
                document.getElementById('tattooer').style.display = "none"
            },
            checkForm(tattooer){
                const passwordGood = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
                const emailGood = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

                this.validPass = passwordGood.test(this.password)
                this.validEmail = emailGood.test(this.email)

                if(this.validPass && this.validEmail){
                    if(tattooer){
                        this.saveTattooer()
                    }
                    else{
                        this.saveUser()
                    }
                }
            },
            saveTattooer(){
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
            async submit(){
                await axios.postForm("https://apispringboot-production-5a7a.up.railway.app/tattooers/create",{
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    info: this.info,
                    styles: this.estilos,
                    tfno: this.tfno,
                    twitter: this.twitter,
                    instagram: this.instagram,
                    facebook: this.facebook,
                    picture: document.getElementById("pictureTattooer").value
                }).then(res => this.$store.state.currentId = res.data.id)
                this.newTattooer()
            },
            async newTattooer(){
                await axios.postForm("https://apispringboot-production-5a7a.up.railway.app/users/create", {
                    name: this.name,
                    password: this.password,
                    isTattooer: true,
                    tattooerId: this.$store.state.currentId
                }).then(res => console.log(res))
                this.$store.state.currentId = null
                this.$router.push("/login")
            },
            async saveUser(){
                await axios.postForm("https://apispringboot-production-5a7a.up.railway.app/users/create",{
                    name: this.nameUser,
                    surname: this.surname,
                    username: this.username,
                    email: this.emailUser,
                    password: this.passwordUser,
                    picture: document.getElementById("pictureUser").value,
                    isTattooer: false
                }).then(res => console.log(res))
                this.$router.push("/login")
                
            }
        }   
    }
</script>
<style>
    .elegir{
        background-color: #D9D9D9;
        padding: 10px;
        width: 90%;
        display: flex; 
        flex-wrap: wrap;
        justify-content: space-around;
        opacity: 0.8;
        border-radius: 10px;
        height: 20vh;
        margin-top: 15vh;
    }
    .error1{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .elegir h3{
        width: 100%;
        text-align: center;
        padding: 10px;
        margin-top: 20px;
    }
    .elegir button{
        width: 30%;
        border-radius: 10px;
        margin-bottom: 20px;
    }
    .login{
        min-height: 88.3vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title{
        color: #D9D9D9;
        width: 100%;
        text-align: center;
        margin-top: 20px;
    }
    form{
        width: 90%;
        display: none;
        background-color: #D9D9D9;
        flex-direction: column;
        padding: 10px;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        min-height: 55vh;
        margin-bottom: 20px;
        opacity: 0.8;
    }
    form div{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        padding: 5px;
    }
    label{
        width: 25%;
        opacity: 1;
        color: black;
    }
    input{
        width: 60%;
        border-radius: 10px;
        padding: 4px;
    }
    .submit{
        width: 50%;
        margin-top: 10px;
        margin-bottom: 15px;
    }
    .logobk{
        width: 50%;
        margin-bottom: 15px;
    }
    a{
        color: black;
        text-align: end;
        margin-right: 10px;
    }
    a:active{
        text-decoration:line-through;
    }
    a:link, a:visited{
        text-decoration: none;
    }
    video{
        position: fixed;
        width: 200%;
        z-index: -1000;
        overflow: hidden;
        margin: 0 auto;
    }
    .estilos{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .estilos div{
        width: 100%;
        text-align: end;
    }
    .error{
        width: 100%;
        margin-left: 30px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    @media (min-width: 600px){
        #user{
            min-height: 60vh;
            width: 40%;
        }
        #user div label{
            font-size: 20px;
            width: 40%;
            text-align: end;
        }
        #user div input{
            width: 50%;
        }
    }
    @media (min-width: 750px) {
        .logobk{
            width: 50%;
            height: 12vh;
        }
    }
    @media(min-width: 1100px){
        form{
            flex-direction: row;
            flex-wrap: wrap;
            min-height: 60vh;
        }
        input{
            width: 30%;
        }
        label{
            width: 10%;
        }
        form div{
            width: 50%;
        }
        .estilos div label{
            width: 50%;
        }
        .estilos div{
            width: 20%;
        }
        .submit{
            width: 20%;
            margin-right: 50px;
        }
    }
</style>