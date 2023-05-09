<script setup>
    import { Icon } from "@iconify/vue"
</script>
<template>
    <section>
        <div class="img_tattooer"></div>
        <h2>Tatuador</h2>
    </section>
    <section>
        <nav>
            <a href="">Detalles</a>
            <a href="">Portfolio</a>
            <a href="">Pide cita</a>
        </nav>
    </section>
    <section class="info">
        <h3>Quienes somos</h3>
        <p>Texto informativo sobre el tatuador .......................................... ................................................. ...................................................................................................</p>
        <h3>Nuestros estilos favoritos</h3>
        <p>Texto informativo sobre el tatuador .......................................... .................................................. ..................................................................................................</p>
    </section>
    <section class="tattooers">
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
    </section>
    <section class="contact">
        <h3>Contacto e Información</h3>
        <div class="tfno">
            <p>678678687</p>
            <Icon icon="mdi:telephone" class="telephone"/>
        </div>
    </section>
</template>
<script>
export default{
    data (){
        return{
            tattooers: ["Jose", "Manuel", "Pedro"]
        }
    }
}
</script>
<style scoped>
    .img_tattooer{
        width: 393px;
        height: 158px;
        background-color: #D9D9D9;
    }
    h2{
        padding: 10px;
    }
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
        margin-left: 10px;
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
    .tattooers{
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
    }
    .tfno p{
        width: 45%;
        text-align: center;
        font-size: 22px;
    }
    .telephone{
        width: 24px;
        height: 24px;
        margin-right: 40px;
    }
</style>
