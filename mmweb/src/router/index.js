import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
	{ path: "/", name: "Home", component: Home, },
	{ path: "/about", name: "About", component: About, },
	{ path: '/rec_movie_u2i/:user_id', name: 'RecMovieU2I', component: () => import('@/views/RecMovieU2I.vue'), },
	{ path: '/rec_movie_i2i/:item_id', name: 'RecMovieI2I', component: () => import('@/views/RecMovieI2I.vue'), },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
