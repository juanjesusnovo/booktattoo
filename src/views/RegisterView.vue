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
                />
            </div>
            <div>
                <label for="#email">Apellido:</label>
                <input
                    type="text"
                    id="surname"
                    required
                    placeholder="Apellido"
                />
            </div>
            <div>
                <label for="#email">Username:</label>
                <input
                    type="text"
                    id="username"
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
                />
            </div>
            <div>
                <label for="#password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                />
            </div>
            <div>
                <label for="#password">Repite Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                />
            </div>
            <div>
                <label for="#istattooer">Eres tatuador?</label>
                <input
                    type="checkbox"
                    id="istattooer"
                />
            </div>
            <input class="submit" type="submit" value="Register" />
            <RouterLink to="/login" @click="allOff">Ya tienes cuenta? Inicie sesión aquí!</RouterLink>
        </form>
        <form action class="user" id="tattooer">
            <div>
                <label for="#email">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    required
                    placeholder="Nombre"
                />
            </div>
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
                <label for="#password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                />
            </div>
            <div>
                <label for="#password">Repite Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                />
            </div>
            <div>
                <label for="#email">Información:</label>
                <input
                    type="text"
                    id="info"
                    required
                    placeholder="Información"
                />
            </div>
            <div>
                <label for="#email">Teléfono:</label>
                <input
                    type="text"
                    id="tfno"
                    required
                    placeholder="Teléfono"
                />
            </div>
            <div>
                <label for="#email">Twitter:</label>
                <input
                    type="text"
                    id="twitter"
                    required
                    placeholder="Twitter"
                />
            </div>
            <div>
                <label for="#email">Instagram:</label>
                <input
                    type="text"
                    id="instagram"
                    required
                    placeholder="Instagram"
                />
            </div>
            <div>
                <label for="#email">Facebook:</label>
                <input
                    type="text"
                    id="facebook"
                    required
                    placeholder="Facebook"
                />
            </div>
            <div>
                <label for="#email">Imagen de perfil:</label>
                <input
                    type="file"
                    id="picture"
                    required
                />
            </div>
            <div class="estilos">
                <label for="#styles">Japones</label>
                <input type="checkbox" name="japones" id="japones" />
                <label for="#styles">Realista</label>
                <input type="checkbox" name="realista" id="realista" />
                <label for="#styles">Cartoon</label>
                <input type="checkbox" name="cartoon" id="cartoon" />
                <label for="#styles">OldSchool</label>
                <input type="checkbox" name="oldschool" id="oldschool" />
                <label for="#styles">3D tattoo</label>
                <input type="checkbox" name="3dtattoo" id="3dtattoo" />
                <label for="#styles">Puntillismo</label>
                <input type="checkbox" name="puntillismo" id="puntillismo" />
                <label for="#styles">Blancos</label>
                <input type="checkbox" name="blancos" id="blancos" />
                <label for="#styles">Minimalismo</label>
                <input type="checkbox" name="minimalism" id="minimalism" />
                <label for="#styles">NewSchool</label>
                <input type="checkbox" name="newschool" id="newschool" />
                <label for="#styles">Blackwork</label>
                <input type="checkbox" name="blackwork" id="blackwork" />
                <label for="#styles">Tribales</label>
                <input type="checkbox" name="japones" id="japones" />
                <label for="#styles">Geometrico</label>
                <input type="checkbox" name="japones" id="japones" />
            </div>
            <input class="submit" type="submit" value="Register" />
            <RouterLink to="/login" @click="allOff">Ya tienes cuenta? Inicie sesión aquí!</RouterLink>
        </form>
    </div>
</template>
<script>
    export default {
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
        min-height: 25vh;
        margin-bottom: 20px;
        opacity: 0.8;
    }
    form div{
        display: flex;
        justify-content: space-around;
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
    .estilos label{
        width: 30%;
    }
    .estilos input{
        width: 20px;
    }
</style>