import { createRouter, createWebHistory } from "vue-router"
import store from "./store"
import Login from "./views/Login.vue"
import Movies from "./views/Movies.vue"
import Profile from "./views/Profile.vue"
import MovieDetail from "./views/MovieDetail.vue"

const authGuard = (to, from, next) => {
	if (!store.state.user) {
		next("/")
	} else {
		next()
	}
}

const loginGuard = (_to, _from, next) => {
	if (store.state.user) {
		next("/movies")
	} else {
		next()
	}
}

const routes = [
	{
		path: "/",
		component: Login,
		beforeEnter: loginGuard
	},
	{
		path: "/movies",
		component: Movies,
        beforeEnter: authGuard
	},
	{
		path: "/movies/:movieId",
		component: MovieDetail,
        beforeEnter: authGuard
	},
	{
		path: "/profile",
		component: Profile,
        beforeEnter: authGuard
	}
]

export default createRouter({
	history: createWebHistory(),
	routes,
})
