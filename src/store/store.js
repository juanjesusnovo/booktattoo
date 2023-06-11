import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

export default createStore({
    state: {
        loged: false,
        currentUser: null,
        isTattooer: false,
        currentId: null
    },
    plugins: [createPersistedState()],
    mutations: {
        setUser(state, user){
            state.currentUser = user
        },
        setId(state,id){
            state.currentId = id
        },
        setLoged(state, isLoged){
            state.loged = isLoged 
        },
        setTattoer(state, tattooer){
            state.isTattooer = tattooer
        },
        setId(state, id){
            state.currentId = id
        },
        setLogout(state){
            state.loged = false,
            state.currentUser = null,
            state.isTattooer = false,
            state.currentId = null 
        }
    }
})