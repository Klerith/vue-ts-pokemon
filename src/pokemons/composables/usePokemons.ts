import { computed, watchEffect } from "vue";
import { useQuery } from "@tanstack/vue-query";

import { getPokemons } from "../helpers/get-pokemons";


export const usePokemons = () => {


  const { isLoading, data:pokemons, isError, error } = useQuery(
    ['pokemons'],
    getPokemons,
    {
      retry: 0,
    }
  );

  watchEffect(() => {
    // console.log('isError', isError.value );
  });
    

  return {
    // Properties
    pokemons,
    isLoading,
    isError,
    error,

    // Computed
    count: computed(() => pokemons.value?.length ?? 0 ),
  }
}



