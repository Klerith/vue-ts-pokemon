<script lang="ts" src="./CounterView.ts">
// import { ref } from 'vue';
// const counter = ref(5);

// const increase = () => {
//   counter.value++;
// }


// export default defineComponent({
//   setup() {

//     const counter = ref(5);

//     const increase = () => {
//       counter.value++;
//     }

//     return {
//       counter,
//       increase,
//     }
//   }
// });


</script>


<template>
  <h1>Counter View: {{ counter }} </h1>
  <!-- <button @click="increase">+1</button> -->
  <button @click="counter++">+1</button>

</template>