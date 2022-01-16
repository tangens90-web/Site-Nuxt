import Registration from "@/axios/registration.js"


export const state =()=>({
    
})


   export const mutations = {
       
        submitSign(state,sign){
            
        },
  
        'ADD_USER'(state,{params}){      
        },
       
    }
   export const actions = {
       
        async register({commit},params){
            console.log(params)
            await Registration.register(params)
            commit('ADD_USER',{params})
        }
    }
    export const getters = {
    
    }