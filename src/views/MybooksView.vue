<template>
    <div>
        <section>
            <NavigationUser />
        </section>
        <section class="book">
            <Icon icon="material-symbols:calendar-month" class="icon"/>
            <p>14 Febrero 18:00</p>
        </section>
    </div>
</template>
<script setup>
    import { Icon } from "@iconify/vue"
    import NavigationUser from '../components/NavigationUser.vue';
</script>
<style scoped>
    div{
        min-height: 86vh;
    }
    section{
        margin-top: 20px;
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
</style>