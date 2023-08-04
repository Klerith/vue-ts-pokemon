<script setup lang="ts">
import PokemonCardList from '../components/PokemonCardList.vue';
import { usePokemons } from '../composables/usePokemons';

const { count, pokemons, isLoading, isError, error } = usePokemons();


</script>

<template>
  <h1 v-if="isLoading">Loading</h1>

  <div v-else-if="isError">
    {{ error }}
  </div>


  <div v-else>
    <h1>Pokemon List - ({{ count }})</h1>
    
    <PokemonCardList 
      :pokemons="pokemons ?? []"
    />

  </div>
</template>

