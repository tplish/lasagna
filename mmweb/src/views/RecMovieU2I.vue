<template>

	<h1>user_embedding</h1>
	<div>
		{{ctx.user_embedding}}
	</div>


	<h1>User Watched Ids</h1>
	<div>
		{{ctx.watch_ids}}
	</div>

	<h1>U2I</h1>
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
