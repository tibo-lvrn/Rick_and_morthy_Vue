CardPays.vue

<script setup>
    defineProps(['personnage']);
</script>

<template>
    <router-link :to="'/fichepersonnage/' + personnage.id">
        <div>
            <h2>{{ personnage.name }}</h2>
            <img :src="personnage.image" :alt="personnage.name" />
        </div>
    </router-link>
</template>

<style scoped>
    .card_personnage img {
        width: 100%;
    }
</style>