<template>

	<h1>item_embedding</h1>
	<div>
		{{ctx.item_embedding}}
	</div>

	<h1>I2I</h1>
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
