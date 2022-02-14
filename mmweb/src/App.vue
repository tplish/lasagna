<template>
	<div>
		<span> user_id: <input type="text" v-model="g_ctx.user_id"></span>
		<span> item_id: <input type="text" v-model="g_ctx.item_id"></span>
	</div>

	<div>
		<router-link to="/">Home</router-link>
		|
		<router-link to="/about">About</router-link>
		|
		<router-link :to="'/rec_movie_u2i/' + g_ctx.user_id">RecMovieU2I</router-link>
		|
		<router-link :to="'/rec_movie_i2i/' + g_ctx.item_id">RecMovieI2I</router-link>
		|
	</div>
	<router-view/>
</template>

<script setup>
	// This starter template is using Vue 3 <script setup> SFCs
	// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
	import { g_ctx } from "./store";
</script>


<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
