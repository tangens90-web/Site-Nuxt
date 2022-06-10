<template>
<div>

    <my-header></my-header>

    <div class="container">
        <article class="one_post" v-for="item in post" :key="item.id">
            <h1>{{item.title}}</h1>
            <p>{{item.body}}</p>
        </article>
    </div>

    <sign-form></sign-form>

    <log></log>
     
    <nuxt-child/>
    

    

</div>
</template>

<script>
import MyHeader from "./Header.vue"
import SignForm from "./SignForm.vue"

import Log from "./LogIn.vue"
import Comments from "./Comments.vue"

export default {
    async fetch () {
        console.log('qeqeqeqeqe')
        
    this.$store.dispatch('vuexposts/getPosts',0)
},
    data() {
        return {
            
        }
    },
    
    computed: {
        post() {
            return this.$store.getters["vuexposts/allPosts"].
            filter(item => item.id == this.$route.params.id)
        }
    },
    components: {
        MyHeader,
        SignForm,
        Log,
        Comments
    },
    
    

}
</script>

<style scoped>
.one_post {
    font-size: 25px;
    text-align: center;
    width: 90%;
    margin: 20px auto;
}


</style>