<template>
    <div class="login">
        <h1 class="title">Inicia Sesion</h1>
        <img class="logobk" src="../assets/logoblanco.png" alt="logo booktattoo">
        <video src="../assets/videotattoo1.mp4" autoplay="true" muted="true" loop="true"></video>
        <form>
            <div>
                <label for="#user">User:</label>
                <input
                    type="user"
                    id="user"
                    required
                    placeholder="user"
                    v-model="this.user"
                />
            </div>
            <div>
                <label for="#password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    v-model="this.password"
                />
            </div>
            <div class="buttons">
                <RouterLink to="/register">No tienes cuenta? Registrate aquí!</RouterLink>
            </div>
        </form>
        <button @click="login">enviar</button>
    </div>
</template>
<script>
    import axios from 'axios'

    export default{
        data: () => {
            return{
                user: "",
                password: ""
            }
        },
        methods:{    
            async login(){
                console.log(this.name, this.password);
                await axios.post("https://apispringboot-production-5a7a.up.railway.app/token",{},{
                    auth: {
                        username: this.user,
                        password: this.password
                    }
                }).then(response => {
                    if(response.data != undefined){
                        localStorage.setItem("token",response.data)
                        this.$store.state.loged = true
                        this.$store.state.currentUser = this.user
                        this.$router.push("/")
                    }
                })
            }
        }
    }

</script>
<style>
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
        margin-top: 50px;
    }
    form{
        width: 90%;
        display: flex;
        background-color: #D9D9D9;
        flex-direction: column;
        padding: 10px;
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        min-height: 25vh;
        margin-bottom: 20px;
        opacity: 0.5;
    }
    form div{
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: 5px;
        opacity: 1;
    }
    label{
        width: 25%;
        opacity: 1;
    }
    input{
        width: 60%;
        border-radius: 10px;
        padding: 4px;
        opacity: 1;
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
        width: 120%;
        z-index: -1000;
        overflow: hidden;
        margin: 0 auto;
    }
    .buttons{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media(min-width: 600px){
        form{
            height: 40vh;
        }
        div label{
            font-size: 25px;
            margin-bottom: 10px;
        }
        input{
            width: 60%;
            height: 3vh;
        }
        .buttons{
            flex-direction: row;
        }
        .buttons input{
            width: 30%;
            margin-right: 30px;
        }
        .logobk{
            width: 60%;
            height: 10vh;
        }
    }
    @media(min-width: 800px){
        .buttons a{
            font-size: 20px;
        }
    }
</style>