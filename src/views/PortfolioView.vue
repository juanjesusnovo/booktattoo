<template>
    <section>
        <NavigationTattooer/>
    </section>
    <section class="images">
        <div class="image">
            <div class="info">
                <Icon icon="mdi:user" class="user"/>
            </div>
        </div>
        <div class="image">
            <div class="info">
                <Icon icon="mdi:user" class="user"/>
            </div>
        </div>
        <div class="image">
            <div class="info">
                <Icon icon="mdi:user" class="user"/>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { Icon } from "@iconify/vue";
    import NavigationTattooer from "../components/NavigationTattooer.vue";
</script>
<style scoped>
    section{
        margin-top: 30px;
    }
    .images{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .image{
        border: 1px solid #D9D9D9;
        min-height: 23vh;
        display: flex;
        margin-bottom: 30px;
        width: 80%;
    }
    .info{
        background-color: black;
        width: 100%;
        opacity: .5;
        align-self: flex-end;
        display: flex;
        justify-content: end;
        padding: 10px;
    }
    .user{
        color: #696969;
        background-color: #d9d9d9;
        border-radius: 20px;
        height: 22px;
        width: 22px;
    }
</style>