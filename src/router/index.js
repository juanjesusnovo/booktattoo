import store from '../store/store'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/tattooer/:id',
      name: 'tattooer',
      component: () => import('../views/TattooerView.vue'),
      props: true
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/mybooks',
      name: 'mybooks',
      component: () => import('../views/MybooksView.vue')
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('../views/FavouritesView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/tattooerprofile',
      name: 'tattooerprofile',
      component: () => import('../views/TattooerProfileView.vue')
    }
  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

  router.beforeEach((to, from, next) => {
    const isLoged = store.state.loged
    const requiresLoged = to.matched.some((record) => record.meta.requiresLoged)
    if(requiresLoged && !isLoged) {
      next("/Login")
    }
    else{ next() }
  
})

export default router
