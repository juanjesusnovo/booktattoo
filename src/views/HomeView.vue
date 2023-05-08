<script setup>
  import { Icon } from "@iconify/vue"
</script>
<template>
  <main>
    <div class="filter">
      <div class="buscador">
        <input type="text" placeholder="Busque tatuadores!">
      </div>
      <div v-if="!mostrar" class="estilos">
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
        <label>Japones<input type="checkbox" class="check"></label>
      </div>
      <div v-else class="estilos" :disabled="mostrar">
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
    <div class="map">
      <div class="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d25650.07356993595!2d-6.2117466!3d36.5237407!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2ses!4v1683526776866!5m2!1ses-419!2ses" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <!-- Carrusel -->
    <h2>Mejores tatuadores!</h2>
    <div class="carousel">
      <Carousel :tattooers="this.cards"/>
    </div>
    <h2>Nuevos tatuadores!</h2>
    <div class="carousel">
      <Carousel :tattooers="this.cards"/>
    </div>
  </main>
</template>
<script> 

  import Carousel from "../components/Carousel.vue";

  export default{
    name: "home",
    data: () => ({
        mostrar: false,
        position: 1,
        cards: ["1","2","3","4","5","6","7","8"],
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
    min-height: 800px;
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
  label{
    background-color: #FFFFFF;
    border-radius: 10px;
    margin: 6px;
    width: 20%;
    text-align: center;
    font-size: 15px;
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
    justify-content: center;
  }
  .map{
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }
  .mapa{
    width: 205px;
    height: 147px;
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