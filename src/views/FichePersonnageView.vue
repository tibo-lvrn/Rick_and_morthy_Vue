FichePersonnageView.vue

<template>
    <!-- <pre>{{ personnage }}</pre> -->
    <h2>{{ personnage.name }}</h2>
    <img :src="personnage.image" :alt="personnage.name" />
    <ul>
        <li v-for="episode in personnage.episode" class="personnage_episode" :key="episode">
            <router-link :to="'/ficheEpisode/' + extractEpisodeNumber(episode)">
                épisode : {{ extractEpisodeNumber(episode) }}
            </router-link>
        </li>
    </ul>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const route = useRoute();
const personnageId = route.params.personnageId
console.log(`id : ${personnageId}`)
// const capital = route.params.capital
const personnage = ref([])

const fetchPersonnages = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character/' + personnageId)
    const responseData = await response.json()
    console.log(responseData)
    personnage.value = responseData
}

function extractEpisodeNumber(url) {
  const pattern = /(\d+)$/;
  const match = url.match(pattern);
  if (match) {
    return parseInt(match[1]);
  }
  return null;
}

fetchPersonnages()

</script>

<style>

</style>
