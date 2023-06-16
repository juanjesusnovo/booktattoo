import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

export default createStore({
    state: {
        loged: false,
        currentUser: null,
        currentId: null,
        isUser: true,
        tattooers: [],
        user: []
    },
    plugins: [createPersistedState()],
    mutations: {
        setUser(state, user){
            state.currentUser = user
        },
        setTattooers(state,tattooer){
            state.tattooers = tattooer
        },
        setId(state,id){
            state.currentId = id
        },
        setLoged(state, isLoged){
            state.loged = isLoged 
        },
        setId(state, id){
            state.currentId = id
        },
        setIsUser(state, isUser){
            state.isUser = isUser
        },
        setFavourites(state, favourites){
            state.favourites = favourites
        },
        addFavs(state, id){
            let favourites = state.favourites
            const isAdded = state.favourites.includes(id)
            isAdded ? (
                favourites = state.favourites.filter(tattooerId => tattooerId !== id)
            ) : (
                favourites = [
                    ...favourites,
                    id
                ]
            )
            state.favourites = favourites
        },
        setLogout(state){
            state.loged = false,
            state.currentUser = null,
            state.isTattooer = false,
            state.currentId = null,
            state.isUser = true 
        }
    }
})