<template>
    
<div>
    <Post></Post>
    <!-- <NuxtLink :to="`/post/${$route.params.id}/comments`">Child</NuxtLink> -->
    
    <!-- <router-view></router-view> -->
    <div class="container" v-if="checkLink($route.path)">
    <nuxt-link class="button open_comment_button" :to="`/post/${$route.params.id}/comments`">
    Comments
    </nuxt-link>
    </div>
    
  
</div>
</template>

<script>


export default {
    async asyncData ({params,store}) {
        console.log(params.id)
        
    store.dispatch('vuexposts/getPosts',0)
},
     head() {
    return {
      title: "Post",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Increment exmaple",
        },
      ],
    };
  },
    data() {
        return {
            id:this.$route.params.id,
           
        }
    },
    methods: {
        checkLink(str){
          let reg = /\bcomments\b/
          let bool = reg.test(str)?false:true

          
          return bool
          

        }
    },
    
   
   
}
</script>

<style scoped>

.open_comment_button {
    color: black;
    background-color: #5ffcff;
   
  }
  .open_comment_button::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    opacity: 0.3;
    background-color: white;
    transition: .8s cubic-bezier(.165, .84, .44, 1);
  }
  /* .button:hover {
     background: rgba(255, 255, 255, 0);
  } */
  .button:hover::before {
    bottom: 0%;
    top: auto;
    height: 100%;
  }
</style>
