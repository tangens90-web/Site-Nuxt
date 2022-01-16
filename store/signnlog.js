


export const state = ()=>({
    sign:null,
    log:null,
})
export const mutations = {
    'OPEN_SIGN_OR_LOG_FORM'(state,{sign,log}){
        state.sign = sign
        state.log = log
       console.log(state.sign,state.log)
    },
    'CLOSE_SIGN_FORM'(state){
        state.sign = null
    },
    'CLOSE_LOGIN_FORM'(state){
        state.log = null
    },
    'SEND_TO_LOGIN_FORM'(state){
        state.sign = null
        state.log = true
    },
    'SEND_TO_SIGN_FORM'(state){
        state.log = null
        state.sign = true
    },
    'CLOSE_SIGN_AND_LOG_FORMS'(state){
        state.log = null
        state.sign = null
    }
    // 'REGISTRATE_USER'(state){
    //     state.sign = null
    // },
    // 'LOGIN_USER'(state){
    //     state.LOG = null
    // },
    
}
export const actions = {
    
}
export const getters = {
    sign: state=>state.sign,
    log: state=>state.log
}
