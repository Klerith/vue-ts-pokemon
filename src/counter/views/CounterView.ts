import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {

    const counter = ref(5);

    const increase = () => {
      counter.value++;
    }

    return {
      counter,
      increase,
    }
  }
});
