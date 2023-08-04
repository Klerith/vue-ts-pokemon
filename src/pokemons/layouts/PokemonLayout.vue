<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import type { RouterLink } from '@/router/list-routes';

import { pokemonRoute } from '../router';

const routeLinks: RouterLink[] = pokemonRoute.children?.map(({ name, path, props }) => {

  const { title, visible } = props as { title: string, visible: boolean };

  return {
    name: name?.toString() ?? '',
    path: path,
    title: title,
    visible: visible,
  }
}) || [];


</script>

<template>
  <NavBar :links="routeLinks" is-secondary />
  <div>
    <!-- <h4>Pokemon Layout</h4> -->
    <!-- <Suspense> -->
      <RouterView />
      
      <!-- <template #fallback>
        Loading...
      </template>
    </Suspense> -->
    
  </div>
</template>


