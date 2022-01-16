<template>
  <div>
    <h1>Increment</h1>
    <span>{{ count }}</span>
    <button @click="increment">increment</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  layout() {
    return "blog";
  },
  middleware: ["local"],
  head() {
    return {
      title: "Increment",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Increment exmaple",
        },
      ],
    };
  },
  computed: {
    count() {
      return this.$store.state.test.counter;
    },
  },
  methods: {
    ...mapMutations({
      increment: "test/increment",
    }),
  },
};
</script>

<style>
</style>