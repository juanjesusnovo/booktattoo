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
          <label>Realista<input type="checkbox" class="check"></label>
          <label>Cartoon<input type="checkbox" class="check"></label>
          <label>Old School<input type="checkbox" class="check"></label>  
        </div>
      <transition name="fade">
        <div v-if="mostrar" class="estilos">
          <label>3D tattoo<input type="checkbox" class="check"></label>
          <label>Puntillismo<input type="checkbox" class="check"></label>
          <label>Blancos<input type="checkbox" class="check"></label>
          <label>Minimalism<input type="checkbox" class="check"></label>
          <label>NewSchool<input type="checkbox" class="check"></label>
          <label>Blackwork<input type="checkbox" class="check"></label>
          <label>Tribales<input type="checkbox" class="check"></label>
          <label>Geometrico<input type="checkbox" class="check"></label>
        </div>
      </transition>
      <label class="more" v-if="!mostrar" id="filtro_toggle"><Icon icon="material-symbols:expand-more"/><input type="checkbox" v-model="mostrar" class="check"></label>
      <label class="more" v-if="mostrar" id="filtro_toggle"><Icon icon="material-symbols:expand-less" /><input type="checkbox" v-model="mostrar" class="check"></label>
    </div>
    <div class="map">
      <div class="mapa">
        <Map />
      </div>
    </div>
    <!-- Carrusel -->
    <h2>Mejores tatuadores!</h2>
    <div class="carousel">
      <Carousel :tattooers="this.cards"/>
    </div>
    <h2>Nuevos tatuadores!</h2>
    <div class="carousel">
      <Carousel :tattooers="this.cards1"/>
    </div>
  </main>
</template>
<script> 

  import Map from "../components/Map.vue"
  import Carousel from "../components/Carousel.vue";

  export default{
    name: "home",
    data: () => ({
        mostrar: false,
        position: 1,
        cards: ["1","2","3","4","5","6","7","8"],
        cards1: ["1","2","3","4","5"]
    }),
    methods: {}
}
</script>
<style scoped>
  @font-face{
    font-family: inter;
    src: url("../assets/inter.ttf");
  }
  main{
    min-height: 90vh;
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
    margin: 10px;
  }
  .check[type="checkbox"]{
    display: none;
  }
  .estilos label{
    background-color: #FFFFFF;
    border-radius: 10px;
    margin: 6px;
    width: 21%;
    height: 20px;
    text-align: center;
    font-size: 15px;
  }
  .more {
    background-color: #FFFFFF;
    border-radius: 20px;
    margin: 6px;
    width: 18px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .estilos{
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity 0s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
  .map{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 3px;
  }
  .mapa{
    width: 100%;
    height: 20vh;
    background-color: #D9D9D9;
  }
  .carousel{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  .buscador{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  h2{
    margin-left: 17px;
    font-size: 17px;
    font-family: inter;
  }
</style>