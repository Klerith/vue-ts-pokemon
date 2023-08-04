import { useQuery } from "@tanstack/vue-query"
import { getPokemonById } from "../helpers/get-pokemon-by-id";


// ['pokemon', 6 ]


export const usePokemon = ( id: string ) => {

  const { isLoading, isError, data: pokemon, error } = useQuery(
    ['pokemon', id ],
    () => getPokemonById(id),
  );


  return {
    isLoading,
    isError,
    pokemon,
    errorMessage: error,
  }

}