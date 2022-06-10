<template>
<div>
    <section class="main_content">
        <div class="container">
            
            <h2 style="margin: 5px auto">Infinity Scroll!</h2>
           
            <div class="grid_block" @click.prevent="checkref" ref="posts">
                <div v-for="item in posts" :key="item.id">
                    
                   

                        <article class="post">
                            <NuxtLink :to="{name:'post-id',params:{id:item.id}}" class="link_div">
                            <div class = "post_desc">
                                
                                
                                    <span class="region"> Russia</span>
                                    <h2>{{item.title}}СНГ получит собственную региональную лигу в Valorant в 2022 году</h2>
                                    <span class="date"> вышла 2 дня назад</span>
                                    <span>
                                        

                                    </span>
                                
                                
                            </div>
                            </NuxtLink>
                        </article>
                    
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
            num:9,
        }
    },
    async fetch({store}){
        // if(store.getters["vuexposts/posts"].length===0){
          console.log("fetch")
          
           await store.dispatch('vuexposts/getPosts',this.num)
        // }
    },
    methods: {
        checkref() {
            // let posts = this.$refs.posts
            // let {width,height} = posts.getBoundingClientRect()
            // console.log(width,height)
        },
        async addVideo() {
            // this.$store.dispatch('addPost', this.desc)
            
            

        },
        addLike(id) {
            this.$store.commit('ADD_LIKE', id)
            
        },
         scroll(){
            
            window.onscroll=()=>{
            let h = window.innerHeight
            let scroll = document.documentElement.scrollTop
            let w = document.documentElement.offsetHeight

             if(h+scroll +5>=w){
                  this.$store.dispatch("vuexposts/scrollPosts",this.num)
             }
           
            } 
        }
    },
     created(){

        this.$store.dispatch("vuexposts/getPosts",this.num)
    },
    mounted () {
        this.scroll();
    },
   
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
.link_div{
    display: block;
    height: 100%;
    width: 100%;
   
}
.post_desc{
    width: 100%;
    height: 100%;
    padding: 0px 15px;
}

</style>
