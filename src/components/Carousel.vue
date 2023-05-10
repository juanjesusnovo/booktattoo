<script setup>
  import { Icon } from "@iconify/vue"
  import router from "../router/index" 
</script>
<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="tattooer" v-for="tattooer in tattooers" :key="tattooer" @click="tattooerView">
        {{ tattooer }}
      </div>
    </div>
  </div>
  <button @click="prev" class="left"><Icon icon="material-symbols:chevron-left" /></button>
  <button @click="next" class="right"><Icon icon="material-symbols:chevron-right" /></button>
</template>

<script>
export default {
  data () {
    return {
      innerStyles: {},
      step: '',
      transitioning: false
    }
  },
  props :{
    tattooers: [ String ]
  },
  mounted () {
    this.setStep()
    this.resetTranslate()
  },
  methods: {
    setStep () {
      const innerWidth = this.$refs.inner.scrollWidth
      const totaltattooers = this.tattooers.length
      this.step = `${innerWidth / totaltattooers}px`
    },
    next () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveLeft()
      this.afterTransition(() => {
        const tattooer = this.tattooers.shift()
        this.tattooers.push(tattooer)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    prev () {
      if (this.transitioning) return
      this.transitioning = true
      this.moveRight()
      this.afterTransition(() => {
        const tattooer = this.tattooers.pop()
        this.tattooers.unshift(tattooer)
        this.resetTranslate()
        this.transitioning = false
      })
    },
    moveLeft () {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },
    moveRight () {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },
    afterTransition (callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },
    resetTranslate () {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    },
    tattooerView () {
      router.push("/tattooer")
    }
  }
}
</script>

<style>
  .carousel {
    width: 100%;
    overflow: hidden;
    display: flex;
    padding: 10px;
  }
  .inner {
    transition: transform 0.2s;
    white-space: nowrap;
  }
  .tattooer {
    width: 130px;
    display: inline-flex; 
    padding: 5px;
    /* optional */
    height: 113px;
    background-color: #D9D9D9;
    color: white;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
  }
  /* optional */
  .right{
    margin-right: 5px;
    margin-top: 10px;
    border-radius: 20px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
  }
  .left{
    margin-right: 5px;
    margin-top: 10px;
    border-radius: 20px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 10px;
  }
</style>