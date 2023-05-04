<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from "@iconify/vue"

</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/tattooer">About</RouterLink>
    </nav>
    <div class="userIcon">
      <Icon icon="mdi:user" class="user"/>
    </div>
  </header>

  <RouterView />

  <footer>
    <nav class="socialmedia">
      <Icon icon="mdi:twitter" class="icon"/>
      <Icon icon="ph:instagram-logo-fill" class="icon"/>
      <Icon icon="ic:baseline-facebook" class="icon"/>
    </nav>
    <nav class="infocookies">
      <p>Informacion</p>
      <p>Cookies</p>
    </nav>
  </footer>
</template>

<style scoped>
  header{
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
  footer{
    background-color: #D9D9D9;
    min-height: 42px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  .icon{
    width: 22px;
    height: 22px;
  }
  .socialmedia{
    width: 30%;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .infocookies{
    width: 50%;
  }
</style>
