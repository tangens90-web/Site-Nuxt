
import Posts from "@/axios/posts.js"




export const state =()=>({
    posts:[],
    allPosts:[],
    
    numScroll:1 
})


   export const mutations = {
    
       
    'GET_POSTS'(state,{data,num}){
        
        state.allPosts = data
        state.numScroll =1

        for (let i = state.allPosts.length-1; i >=state.allPosts.length-num ; i--) {
            state.posts.push(data[i]) 
        }
        state.numScroll++
        
     
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
        },
        'SCROLL_POSTS'(state,num){
            let up =  state.allPosts.length-1-num*(state.numScroll-1)
            let down = state.allPosts.length-num*state.numScroll
           
            
            if(down>0){
            for (let i = up; i >=down ; i--) {

                state.posts.push(state.allPosts[i]) 
            }
            state.numScroll++
        }
        else{
            if(state.posts.length<state.allPosts.length)
            for (let i = up; i >=0 ; i--) {

                state.posts.push(state.allPosts[i]) 
            }
        }
            
        },
       
    }
   export const actions = {
        async getPosts({commit},num) {
            let data =  await Posts.getPosts()
    
       
            
            commit('GET_POSTS', {data,num});
        },

        async scrollPosts({commit},num) {
            commit('SCROLL_POSTS', num);
        },
        
        async addPost({commit},text) {
            await Posts.addPost(text)
            let data =  await Posts.getPosts()
            
            commit('ADD_POST', data);
        },
        
        
    }
    export const getters = {
        allPosts:state =>state.allPosts,
        posts: state => state.posts, 
        
    }


