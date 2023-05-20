FicheEpisodeView.vue

<template>
    <h2>{{ episode.name }}</h2>
    <h3>Fiche Episode {{ episode.episode }}</h3>
    <p>{{ episode.air_date }}</p>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const route = useRoute();
const episodeLink = route.params.episodeLink
console.log(episodeLink)

const episode = ref([])

const fetchPersonnages = async () => {
    console.log(episodeLink)
    const response = await fetch('https://rickandmortyapi.com/api/episode/' + episodeLink)
    const responseData = await response.json()
    episode.value = responseData
}
fetchPersonnages()

</script>

<style>

</style>
