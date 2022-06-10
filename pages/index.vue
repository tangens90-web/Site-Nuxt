<template>
  <div class="container">
    <div>
      
      <!-- <Logo />
      <h1 class="title">vite-example</h1> -->
      <Main/>
      
      <div class="links">
        <!-- <NuxtLink
          to="/Increment"
          rel="noopener noreferrer"
          class="button--green"
        >
          Increment
        </NuxtLink>

        <NuxtLink
          to="/blog/my-first-blog-post"
          rel="noopener noreferrer"
          class="button--green"
        >
          Content
        </NuxtLink> -->
        <!-- <button @click="$fetch">axios test</button> -->
      </div>
      <!-- <p v-if="$fetchState.pending">Fetching mountains...</p> -->
      <!-- <p v-else-if="$fetchState.error">An error occurred :(</p> -->
      <!-- <div v-else>
        <h1>Nuxt Mountains</h1>
        <p>{{ title }}</p>
        <button @click="$fetch">Refresh</button>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "description",
          name: "News",
          content: "Cybersport in Valorant",
        },
      ],
    };
  },
  async fetch({store}){
        // if(store.getters["vuexposts/posts"].length===0){
          
          
           await store.dispatch('vuexposts/getPosts')
        // }
    },
  data() {
    return {
      title: "",
      num:9,
    };
  },
  // async mounted() {
  //   // await this.getData();
  //   this.$nextTick(() => {
  //     this.$nuxt.$loading.start();
  //     setTimeout(() => this.$nuxt.$loading.finish(), 500);
  //   });
  // },
  // async fetch() {
  //   await this.getData();
  // },
  // methods: {
  //   async getData() {
  //     const { data } = await this.$axios.get(
  //       "https://hn.algolia.com/api/v1/items/1"
  //     );
  //     this.title = data.title;
  //   },
  // },
};
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
