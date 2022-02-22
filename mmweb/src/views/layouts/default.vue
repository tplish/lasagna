<template>
	<el-container>
		<el-header>
			<router-link to="/dashboard">dashboard</router-link>
			|
			<router-link to="/version_doc">version_doc</router-link>
			<hr>
		</el-header>
		<el-main>
			<router-view></router-view>
		</el-main>
		<el-footer><hr></el-footer>
	</el-container>
</template>

<script setup>
</script>

<style>

</style>
