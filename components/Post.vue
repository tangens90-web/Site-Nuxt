<template>
<div>

    <heads></heads>

    <div class="container">
        <div class="one_post" v-for="item in post" :key="item.id">
            <h1>{{item.title}}</h1>
            <p>{{item.body}}</p>
        </div>
    </div>

    <sign-form></sign-form>

    <log></log>
    <comments></comments>

    

</div>
</template>

<script>
import Heads from "./Head.vue"
import SignForm from "./SignForm.vue"

import Log from "./LogIn.vue"
import Comments from "./Comments.vue"

export default {
    data() {
        return {
            
        }
    },
    async created(){
        
        return this.$store.dispatch('vuexposts/getPosts')
    },
    computed: {
        post() {
            return this.$store.getters["vuexposts/posts"].filter(item => item.id == this.$route.params.id)
        }
    },
    components: {
        Heads,
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