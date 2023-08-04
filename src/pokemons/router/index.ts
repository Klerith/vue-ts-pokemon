import type { RouteRecordRaw } from 'vue-router';


const ROUTE_NAME = 'pokemons';


export const pokemonRoute: RouteRecordRaw = {
  path: `/${ ROUTE_NAME }`,
  redirect: `/${  ROUTE_NAME }/list`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      path: `/${ ROUTE_NAME }/by/:id`,
      props: { title: 'Pókemon por ID', visible: false },
      name: 'pokemon-id',
      component: () => import('@/pokemons/pages/PokemonById.vue'),
    },
    {
      path: `/${ ROUTE_NAME }/list`,
      props: { title: 'Listado', visible: true },
      name: 'pokemon-list',
      component: () => import('@/pokemons/pages/PokemonList.vue'),
    },
    {
      path: `/${ ROUTE_NAME }/list-native`,
      props: { title: 'Listado Nativo', visible: true },
      name: 'pokemon-list-native',
      component: () => import('@/pokemons/pages/PokemonListNative.vue'),
    },
    {
      path: `/${ ROUTE_NAME }/search`,
      props: { title: 'Búsqueda', visible: true },
      name: 'pokemon-search',
      component: () => import('@/pokemons/pages/PokemonSearch.vue'),
    },
  ]
}
