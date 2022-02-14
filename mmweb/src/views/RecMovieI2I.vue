<template>

	<h1>Item Info</h1>
	<ul>
		<li>item_embedding: {{ctx.item_embedding}}</li>
	</ul>

	<h1>i2i</h1>
	<ul>
		<li v-for="item in ctx.item_list">{{item}}</li>
	</ul>

</template>

<script setup>
	import { ref, reactive } from 'vue';

	const ctx = reactive({
		item_embedding: [],
		item_list: []
	});
</script>

<style scoped>

</style>
