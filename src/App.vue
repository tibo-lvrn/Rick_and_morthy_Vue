<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="content">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/rick-and-morty-non-toxic-rick-sanchez-18.png" width="125" height="125" />

      <div class="wrapper">

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/personnage">Personnages</RouterLink>
          <RouterLink to="/episode">Episodes</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped> 
header {
  width: 100%;
  height: 100px;
  display: flex;
  background-color: rgb(18, 185, 63);
  align-items: center;
}

.logo {
  height: 100%;
  width: auto;
}

nav {
  display: flex;
  gap: 1rem;
  color: white;
}

nav > a {
  text-decoration: none;
  color: white;
  padding: 5px;
}

nav > a:hover {
  color: rgb(18, 185, 63);
  background-color: white;
  border-radius: 5px;
  padding: 5px;
}
</style>
