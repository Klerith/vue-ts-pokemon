import type { Pokemon } from "@/pokemons/interfaces";
import { reactive } from "vue";



interface Store {
  // State
  pokemons: {
    list         : Pokemon[];
    count        : number;
    isLoading    : boolean;
    hasError     : boolean;
    errorMessage?: string;
  },

  // Actions / Métodos 
  startLoadingPokemons: () => Promise<void>;
  loadedPokemons: (data: Pokemon[]) => void;
  loadPokemonsFailed: (error: string) => void;
}


const store = reactive<Store>({
  pokemons: {
    list: [],
    count: 0,
    isLoading: false,
    hasError: false,
    errorMessage: undefined
  },
  startLoadingPokemons: async function (): Promise<void> {
    this.pokemons = {
      ...this.pokemons,
      isLoading: true,
      hasError: false,
      errorMessage: undefined,
    }
  },
  loadedPokemons: function (data: Pokemon[]): void {
    this.pokemons = {
      list: data,
      count: data.length,
      isLoading: false,
      hasError: false,
      errorMessage: undefined
    }
  },
  loadPokemonsFailed: function (error: string): void {
    this.pokemons = {
      ...this.pokemons,
      isLoading: false,
      hasError: true,
      errorMessage: error
    }
  }
});


// store.startLoadingPokemons();


export default store;