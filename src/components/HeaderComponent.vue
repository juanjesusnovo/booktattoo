<script setup>
    import DropdownComponent from "./DropdownComponent.vue";
</script>
<template>
    <div class="header">
        <div class="logo">
            <RouterLink to="/"><img src="../assets/booktattoologo.png" alt="booktattoo logo by wart"></RouterLink>
        </div>
        <div class="menu">
            <DropdownComponent />
        </div>
    </div>
</template>
<script>
    export default{
        methods:{
        
        }
    }
</script>
<style>
    .menu{
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: end;
    }
    .menu p{
        text-align: end;
        padding: 10px;
    }
    .logo{
        width: 75%;
        display: flex;
        justify-content: flex-end;
    }
    img{
        width: 180px;
        height: 30px;
    }    
    .header{
        background-color: #696969;
        width: 100%;
        display: flex;
        justify-content:space-between;
        align-items: center;
        min-height: 57px;
    }
    nav{
        width: 100%;
        display: flex;
        justify-content: space-around;
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
    .dropdown{
        position: relative;
        display: inline-block;
    }
    .dropdown-content{
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .show{
        display: block;
    }
    @media(min-width: 500px){
        .logo{
            width: 71%;
        }
    }
    @media(min-width: 650px){
        .logo{
            width: 66%;
        }
        img{
            height: 50px;
        }
        .userIcon{
            width: 40px;
            height: 40px;
        }
    }
    @media(min-width: 850px){
        .logo{
            justify-content: flex-start;
            margin-left: 5%;
        }
        img{
            width: 260px;
        }
        .header{
            height: 7vh;
        }
    }
</style>