<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQueryClient } from '@tanstack/vue-query';

import { usePokemon } from '../composables/usePokemon';

const route = useRoute();
const queryClient = useQueryClient();

const { id } = route.params;

const { isLoading, isError, pokemon, errorMessage } = usePokemon(id.toString());

const invalidateQueries = ()=> {
  queryClient.invalidateQueries(['pokemon','10']);
}


</script>

<template>

  <button @click="invalidateQueries">Invalidar queries</button>

  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-else-if="isError">{{ errorMessage }}</h1>

  <div v-else-if="pokemon">
      <h1>{{ pokemon.name }}</h1>
      <div class="character-container">
          <img :src="pokemon.frontSprite" :alt="pokemon.name">
      </div>
  </div>

  
</template>


<style scoped>
.character-container {
    display: flex;
    flex-direction: row;
}

img {
    width: 150px;
    border-radius: 5px;
}

</style>