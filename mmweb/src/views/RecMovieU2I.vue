<template>

	<h1>User Info</h1>
	<ul>
		<li>user_embedding: {{ctx.user_embedding}}</li>
	</ul>


	<h1>User Action List</h1>
	<ul>
		<li v-for="watch_id in ctx.watch_ids">{{watch_id}}</li>
	</ul>

	<h1>u2i</h1>
	<ul>
		<li v-for="item in ctx.item_list">{{item}}</li>
	</ul>


</template>

<script setup>
	import { ref, reactive } from 'vue';

	const ctx = reactive({
		user_embedding: [],
		watch_ids: [],
		item_list: []
	});

</script>

<style scoped>

</style>
