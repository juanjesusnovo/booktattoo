<script setup>
  import { Icon } from "@iconify/vue"
</script>
<template>
  <main>
    <div class="filter">
      <div class="buscador">
        <input type="text" placeholder="Busque tatuadores!">
      </div>
      <div class="estilos">
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
      </div>
      <div v-if="mostrar" class="estilos" :disabled="mostrar">
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
      </div>
      <label class="more" v-if="!mostrar"><Icon icon="material-symbols:expand-more"/><input type="checkbox" v-model="mostrar" class="check"></label>
      <label class="more" v-if="mostrar"><Icon icon="material-symbols:expand-less" /><input type="checkbox" v-model="mostrar" class="check"></label>
    </div>
  </main>
</template>
<script>
  export default{
    name: "Home",
    data: () => ({
      mostrar:false
    })
  }
</script>
<style scoped>
  main{
    min-height: 750px;
  }
  .filter{
    background-color: #D9D9D9;
    width: 100%;
    min-height: 132px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  input{
    border-radius: 10px;
  }
  .check[type="checkbox"]{
    display: none;
  }
  label{
    background-color: #FFFFFF;
    border-radius: 10px;
    margin: 6px;
    width: 20%;
    text-align: center;
  }
  .more {
    background-color: #FFFFFF;
    border-radius: 20px;
    margin: 6px;
    width: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .estilos{
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
  }
</style>