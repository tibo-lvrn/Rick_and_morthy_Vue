PersonnageView.vue

<template>
    <div class="personnage">
        <h1>Personnages</h1>
        <label for="search">Rechercher un personnage : </label>
        <input type="text" v-model="search" placeholder="Rechercher un personnage" />
        <label for="search">filtrer par genre : </label>
        <select id="status" name="status" v-model="status">
            <option value="alive">alive</option>
            <option value="dead">dead</option>
            <option value="unknown">unknown</option>
        </select>
        <button @click="previouspage">Précédent</button>
        <button @click="nextpage">Suivant</button>
        <div v-if="loading">Loading...</div>
        <div v-else class="personnage_wrapper">
            <div v-for="personnage in filteredPersonnages" :key="personnage.id" class="card_personnage">
                <CardPays :personnage="personnage"></CardPays>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CardPays from '@/components/CardPays.vue'
import { watch } from 'vue'

const personnages = ref([])
const loading = ref(false)
const search = ref('')
const filteredPersonnages = ref([])
const page = ref(1)
const status = ref('')


const fetchPersonnages = async () => {
    loading.value = true
    console.log(page.value)
    const response = await fetch('https://rickandmortyapi.com/api/character' + '?status=' + status.value + '&page=' + page.value)
    const data = await response.json()
    personnages.value = data.results
    filteredPersonnages.value = data.results
    loading.value = false
}

fetchPersonnages()

watch(status, () => {
    fetchPersonnages()
})

function nextpage() {
    page.value++
    fetchPersonnages()
}

function previouspage() {
    if (page.value == 1) {
        page.value = 1
    } else {
        page.value--
        fetchPersonnages()
    }
}

watch(search, () => {
    filteredPersonnages.value = personnages.value.filter(personnage => {
        return personnage.name.toLowerCase().includes(search.value.toLowerCase())
    })
})
</script>

<style scoped>
.personnage_wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
}

.card_personnage {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 20%;
    transition: all 0.2s ease-in-out;
}

.card_personnage:hover {
    transform: scale(1.02);
}

</style>