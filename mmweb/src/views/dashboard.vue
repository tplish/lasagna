<template>
	<h1>Dashboard</h1>
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
	import { g_ctx } from "@/store";
</script>

<style>

</style>
