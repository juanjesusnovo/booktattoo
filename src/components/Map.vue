<template>
    <div id="map"></div>
</template>
<script setup>
    import { Loader } from "@googlemaps/js-api-loader"

    const apiOptions = {
        apiKey: "AIzaSyC9VjWmRJoxHyTiY0NQQ99kLnraLgMKZAg"
    }

    const loader = new Loader(apiOptions)

    loader.load().then(()=>{
        const map = displayMap()
    })

    function displayMap(){
        const mapOptions = {
            center: { lat: 36.52107194979073, lng: -6.2783630722432555 },
            zoom: 11.5
        }  
        const mapDiv = document.getElementById('map')

        const map = new google.maps.Map(mapDiv, mapOptions);
        
        return map
    }
</script>
<style scoped>
    #map{
        height: 100%;
        width: 100%;
    }
</style>