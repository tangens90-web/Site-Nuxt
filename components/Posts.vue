<template>
<div>
    <section class="main_content">
        <div class="container">
            
            <button @click="addVideo">Add Post</button>
            <div class="grid_block" @click.prevent="checkref" ref="posts">
                <div v-for="item in posts" :key="item.id">

                    <NuxtLink :to="{name:'post-id',params:{id:item.id}}">

                        <div class="post">

                            <div>

                                <div>
                                    <span class="place"> Russia</span>
                                    <h2>{{item.title}}СНГ получит собственную региональную лигу в Valorant в 2022 году</h2>
                                    <span class="date"> вышла 2 дня назад{{item.desc}}</span>
                                    <span>
                                        

                                    </span>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>

    </section>

</div>
</template>

<script>
export default {
    
    data() {
        return {
            desc: "testpost",
        }
    },
    methods: {
        checkref() {
            // let posts = this.$refs.posts
            // let {width,height} = posts.getBoundingClientRect()
            // console.log(width,height)
        },
        async addVideo() {
            this.$store.dispatch('addPost', this.desc)

        },
        addLike(id) {
            this.$store.commit('ADD_LIKE', id)
            console.log(this.posts)
        }
    },
    // async created(){

    //     return 
    // },

    computed: {
        posts() {
            return this.$store.getters["vuexposts/posts"]
        }
    },

}
</script>

<style scoped>
a {
    text-decoration-line: none;
    color: white;
}
</style>
