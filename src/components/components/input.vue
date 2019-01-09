<template>
	<div>
		Primary
		<codica-input type="text" :placeholder="'placeholder'" :label="'Label'"></codica-input>
		<br>
		Success
		<codica-input default-class="success" type="text" :placeholder="'placeholder'" :label="'Label'"></codica-input>
		<br>
		Warning
		<codica-input default-class="warning" type="text" :placeholder="'placeholder'" :label="'Label'"></codica-input>
		<br>
		Danger
		<codica-input default-class="danger" type="text" :placeholder="'placeholder'" :label="'Label'"></codica-input>
		<br>
		Info
		<codica-input default-class="info" type="text" :placeholder="'placeholder'" :label="'Label'"></codica-input>
		<br>
		<codica-field label="Label" type="is-primary">
			<codica-input type="text" :placeholder="'placeholder'"></codica-input>
		</codica-field>
		<br>
		<br>
		<codica-field label="Label" type="is-primary">
			<codica-input type="text" :placeholder="'placeholder'" :label="'Label2'"></codica-input>
		</codica-field>
		<br>
		<br>
		<br>
		<codica-field label="Label" type="is-primary">
			<codica-input type="textarea" :placeholder="'Placeholder'" :label="'Label2'"></codica-input>
		</codica-field>
		<br>
		<br>
		<codica-field label="Label" type="is-primary">
			<codica-toggle :styled="['bold']" v-model="status" :label="{ defaultText: `${status}` }"></codica-toggle>
		</codica-field>
	</div>
</template>

<script>
	export default {
		name: "inpt",
		data: () => ({
			status: false
		})
	}
</script>

<style scoped>

</style>
