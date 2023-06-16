<script setup>
  import { Icon } from "@iconify/vue"
</script>
<template>
  <main>
    <div class="filtrado">
      <div class="filter">
        <div class="filtrar">
          <button @click="filtrar" v-if="!filtrando">Filtrar</button>
          <button @click="noFiltrar" v-else>Dejar de Filtrar</button>
        </div>
        <div class="estilos">
          <label for="Japones" class="label" v-bind:class="{'selected': Japones , 'color': !Japones}">Japones<input type="checkbox" class="check" id="Japones" v-model="Japones"></label>
          <label for="Realista" class="label" v-bind:class="{'selected': Realista , 'color': !Realista}">Realista<input type="checkbox" class="check" id="Realista" v-model="Realista"></label>
          <label for="Cartoon" class="label" v-bind:class="{'selected': Cartoon , 'color': !Cartoon}">Cartoon<input type="checkbox" class="check" id="Cartoon" v-model="Cartoon"></label>
          <label for="Old School" class="label" v-bind:class="{'selected': OldSchool , 'color': !OldSchool}">Old School<input type="checkbox" class="check" id="Old School" v-model="OldSchool"></label>  
        </div>
      <transition name="fade">
        <div v-bind:class="{ 'estilos' :mostrar , 'estilosHidden': !mostrar}" class="nada">
          <label for="3D tattoo" class="label" v-bind:class="{'selected': Dtattoo , 'color': !Dtattoo}">3D tattoo<input type="checkbox" class="check" id="3D tattoo" v-model="Dtattoo"></label>
          <label for="Puntillismo" class="label" v-bind:class="{'selected': Puntillismo , 'color': !Puntillismo}">Puntillismo<input type="checkbox" class="check" id="Puntillismo" v-model="Puntillismo"></label>
          <label for="Blancos" class="label" v-bind:class="{'selected': Blancos , 'color': !Blancos}">Blancos<input type="checkbox" class="check" id="Blancos" v-model="Blancos"></label>
          <label for="Minimalism" class="label" v-bind:class="{'selected': Minimalism , 'color': !Minimalism}">Minimalism<input type="checkbox" class="check" id="Minimalism" v-model="Minimalism"></label>
          <label for="NewSchool" class="label" v-bind:class="{'selected': NewSchool , 'color': !NewSchool}">NewSchool<input type="checkbox" class="check" id="NewSchool" v-model="NewSchool"></label>
          <label for="Blackwork" class="label" v-bind:class="{'selected': Blackwork , 'color': !Blackwork}">Blackwork<input type="checkbox" class="check" id="Blackwork" v-model="Blackwork"></label>
          <label for="Tribales" class="label" v-bind:class="{'selected': Tribales , 'color': !Tribales}">Tribales<input type="checkbox" class="check" id="Tribales" v-model="Tribales"></label>
          <label for="Geometrico" class="label" v-bind:class="{'selected': Geometrico , 'color': !Geometrico}">Geometrico<input type="checkbox" class="check" id="Geometrico" v-model="Geometrico"></label>
        </div>
      </transition>
      <label class="more" v-if="!mostrar" id="filtro_toggle"><Icon icon="material-symbols:expand-more"/><input type="checkbox" v-model="mostrar" class="check"></label>
      <label class="more" v-if="mostrar" id="filtro_toggle"><Icon icon="material-symbols:expand-less" /><input type="checkbox" v-model="mostrar" class="check"></label>
    </div>
    <div class="map">
      <div class="mapa">
        <Map></Map>
      </div>
    </div>
    </div>
    <!-- Carrusel -->
    <div class="carrusel" v-if="!filtrando">
      <div>
        <h2>Mejores tatuadores!</h2>
        <div class="carousel">
          <Carousel :tattooers="this.$store.state.tattooers"/>
        </div>
      </div>
      <div>
        <h2>Nuevos tatuadores!</h2>
        <div class="carousel">
          <Carousel :tattooers="this.$store.state.tattooers"/>
        </div>
      </div>
    </div>
    <div class="filtrando" v-else>
      <div v-for="tattooer in tattooers_filtrados" class="tattooerf" @click="tattooerView(tattooer.id)">
        {{ tattooer.name }}
      </div>
    </div>
  </main>
</template>
<script> 

  import Map from "../components/Map.vue"
  import Carousel from "../components/Carousel.vue";

  import axios from "axios";

  export default{
    name: "home",
    created() {
      axios.get("https://apispringboot-production-5a7a.up.railway.app/tattooers")
      .then(response => this.$store.state.tattooers = response.data)
    },
    data: () => ({
        picture: "data:image/jpeg;base64, ",
        mostrar: false,
        load: false,
        position: 1,
        cards: ["1","2","3","4","5","6","7","8"],
        cards1: ["1","2","3","4","5"],
        Japones: false,
        Realista: false,
        Cartoon: false,
        OldSchool: false,
        Dtattoo: false,
        Puntillismo: false,
        Blancos: false,
        Minimalism: false,
        NewSchool: false,
        Blackwork: false,
        Tribales: false,
        Geometrico: false,
        filtrando: false,
        tattooers_filtrados: []
    }),
    methods: {
      filtrar(){
        console.log(this.load);
        if(this.Japones == false && this.Realista == false && this.Cartoon == false && this.OldSchool == false &&
        this.Dtattoo == false && this.Puntillismo == false && this.Blancos == false && this.Minimalism == false &&
        this.NewSchool == false && this.Blackwork == false && this.Tribales == false && this.Geometrico == false
        ){
          this.tattooers_filtrados = this.$store.state.tattooers
        }
        else{
          this.$store.state.tattooers.forEach(element => {
          if(this.Japones == true){
            if(element.styles.includes("Japones")){
              console.log("object");
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.Realista == true){
            if(element.styles.includes("Realista")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.Cartoon == true){
            if(element.styles.includes("Cartoon")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.OldSchool == true){
            if(element.styles.includes("OldSchool")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.Dtattoo == true){
            if(element.styles.includes("Dtattoo")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.Puntillismo == true){
            if(element.styles.includes("Puntillismo")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.Blancos == true){
            if(element.styles.includes("Blancos")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.Minimalism == true){
            if(element.styles.includes("Minimalism")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.NewSchool == true){
            if(element.styles.includes("NewSchool")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.Blackwork == true){
            if(element.styles.includes("Blackwork")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.Tribales == true){
            if(element.styles.includes("Tribales")){
              this.tattooers_filtrados.push(element)
            }
          }
          if(this.Geometrico == true){
            if(element.styles.includes("Geometrico")){
              this.tattooers_filtrados.push(element)
            }
          }
        })
        }
        this.filtrando = true
      },
      noFiltrar(){
        this.filtrando = false
        this.tattooers_filtrados = []
        this.Japones = false
        this.Realista = false
        this.Cartoon = false
        this.OldSchool = false
        this.Dtattoo =  false
        this.Puntillismo = false
        this.Blancos = false
        this.Minimalism = false
        this.NewSchool = false
        this.Blackwork = false
        this.Tribales = false
        this.Geometrico = false
      },
      tattooerView (tattooer) {
        console.log(tattooer)
        this.$router.push(`/tattooer/${tattooer}`)
      },
      imagenes(){
        this.$store.state.tattooers.forEach( tatt =>{
          console.log(tatt.name);
        })
      },
    }
}
</script>
<style scoped>
  @font-face{
    font-family: inter;
    src: url("../assets/inter.ttf");
  }
  .filtrando{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .tattooerf{
    width: 55%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D9D9D9;
  }
  .tattooerf img{
    width: 100%;
    height: 100px;
  }
  main{
    min-height: 88vh;
  }
  .selected{
    color: white;
    background-color: black;
  }
  .filtrar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .filtrar button{
    background: white;
    border-radius: 10px;
    width: 20%;
    border: 1;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
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
  .color{
    background-color: #FFFF;
  }
  .mostrar{
    display: flex
  }
  .label{
    border-radius: 10px;
    margin: 6px;
    width: 21%;
    height: 20px;
    text-align: center;
    font-size: 15px;
  }
  .more {
    background-color: #FFFF;
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
  .estilosHidden{
    width: 100%;
    overflow: hidden;
    display: none;
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
  [value="Japones"]:checked ~ label[for="Japones"]{
    background-color: #D9D9D9;
  }
  @media (min-width: 500px) {
    .carousel{
      padding: 20px;
    }
    h2{
      font-size: 23px;
    }
  }
  @media(min-width: 600px){
    .buscador input{
      width: 50%;
      text-align: center;
    }
  }
  @media(min-width: 850px){
    .mapa{
      height: 30vh;
    }
  }
  @media(min-width: 900px) {
    main{
      flex-direction: row;
      flex-wrap: wrap;
      display: flex;
    }
    .filtrado{
      width: 45%;
      height: 88vh;
      background-color: #D9D9D9;
    }
    .filter{
      align-content: center;
      margin-bottom: 10;
    }
    .carrusel{
      width: 55%;
      height: 88vh;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-around;
    }
    .more{
      display: none;
    }
    .nada{
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 0px;
    }
    .estilos{
      margin-top: 40px;
      height: 10%;
    }
    .filter{
      width: 100%;
      height: 30vh;
    }
    .mapa{
      height: 40vh;
    }
  }
  @media (min-width: 1100px) {
    .filtrado{
      width: 35%;
    }
    .carrusel{
      width: 65%;
    }
  }
</style>