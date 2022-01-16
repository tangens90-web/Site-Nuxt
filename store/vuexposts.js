
import Posts from "@/axios/posts.js"




export const state =()=>({
    posts:[], 
})


   export const mutations = {
        
       
        'GET_POSTS'(state, post) {
            
            state.posts = post.map((item)=>({
                ...item,
                count:0
            }));
            
        },
        'ADD_POST'(state,post){
            this.GET_POSTS
            
        },
        
        'ADD_LIKE'(state,id){
           
            state.posts.forEach(post => {
                if(post.id==id){
                    post.count++
                    
                }
            })
        }
    }
   export const actions = {
        async getPosts({commit}) {
            let data =  await Posts.getPosts()
            // console.log("data found"+ data)
            commit('GET_POSTS', data);
        },
        async addPost({commit},text) {
            await Posts.addPost(text)
            let data =  await Posts.getPosts()
            
            commit('ADD_POST', data);
        },
        
    }
    export const getters = {
        posts: state => state.posts,  
    }


