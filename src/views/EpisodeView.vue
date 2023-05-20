EpisodeView.vue

<template>
    <div class="episode">
        <h1>Episode</h1>
        <label for="search">Rechercher un épisode : </label>
        <input type="text" v-model="search" placeholder="Rechercher un episode" />
        <button @click="previouspageEP">Précédent</button>
        <button @click="nextpageEP">Suivant</button>
        <div v-if="loading">Loading...</div>
        <div v-else class="episode_wrapper">
            <div v-for="episode in filteredepisodes" :key="episode.id" class="card_episode">
                <!-- <CardPays :episode="episode"></CardPays> -->
                {{ episode.name }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CardPays from '@/components/CardPays.vue'
import { watch } from 'vue'

const episodes = ref([])
const loading = ref(false)
const search = ref('')
const filteredepisodes = ref([])
const page = ref(1)


const fetchepisodes = async () => {
    loading.value = true
    const response = await fetch('https://rickandmortyapi.com/api/episode?page=' + page.value)
    const data = await response.json()
    episodes.value = data.results
    filteredepisodes.value = data.results
    loading.value = false
}

fetchepisodes()

function nextpageEP() {
    page.value++
    fetchepisodes()
}

function previouspageEP() {
    if (page.value == 1) {
        page.value = 1
    } else {
        page.value--
        fetchepisodes()
    }
}

watch(status, () => {
    fetchepisodes()
})

function nextpage() {
    page.value++
    fetchepisodes()
}

function previouspage() {
    if (page.value == 1) {
        page.value = 1
    } else {
        page.value--
        fetchepisodes()
    }
}

watch(search, () => {
    filteredepisodes.value = episodes.value.filter(episode => {
        return episode.name.toLowerCase().includes(search.value.toLowerCase())
    })
})
</script>

<style scoped>
.episode_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
}

.card_episode {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 20%;
    transition: all 0.2s ease-in-out;
}

.card_episode:hover {
    transform: scale(1.02);
}

</style>