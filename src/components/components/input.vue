<template>
	<div>
		<codica-input type="text" :placeholder="'placeholder'" :label="'Label'"></codica-input>
		<br>
		<br>
		<codica-field label="Label" type="is-primary">
			<codica-input type="text" :placeholder="'placeholder'"></codica-input>
		</codica-field>
		<br>
		<br>
		<codica-field label="Label" type="is-primary">
			<codica-input type="text" :placeholder="'placeholder'" :label="'Label2'"></codica-input>
		</codica-field>
	</div>
</template>

<script>
	export default {
		name: "inpt"
	}
</script>

<style scoped>

</style>
