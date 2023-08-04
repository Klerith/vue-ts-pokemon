<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import store from '@/store/store';

import PokemonCardList from '../components/PokemonCardList.vue';
import { getPokemons } from '../helpers/get-pokemons';


useQuery(
  ['pokemons'],
  getPokemons,
  {
    select(data) {
        store.loadedPokemons(data);
    },
  }
);


</script>

<template>
  <h1 v-if="store.pokemons.isLoading">Loading</h1>

  <div v-else-if="store.pokemons.hasError">
    {{ store.pokemons.errorMessage }}
  </div>


  <div v-else>
    <h1>Pokemon List Native - ({{ store.pokemons.count }})</h1>

    <PokemonCardList 
      :pokemons="store.pokemons.list"
    />

  </div>
</template>

