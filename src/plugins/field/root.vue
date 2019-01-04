<template>
	<div class="cu-field" :class="type">
		<label class="cu-label">{{label}}</label>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'codica-field',
		props: {
			type: {
				type: String,
				default: '',
				require: false
			},
			label: {
				type: String,
				default: '',
				require: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.cu-field {
		text-align: left;
		.cu-label {
			font-weight: bold;
			margin-bottom: .5em;
			display: block;
		}
	}
</style>
