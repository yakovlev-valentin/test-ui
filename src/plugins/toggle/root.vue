<template>
	<label class="vue-codica-toggle">
		<span class="label">
			<span>{{label.text}}</span>
		</span>
		<input
				v-model="model"
				@change="handleChange" type="checkbox">
		<div class="toggle" :class="{ 'toggle--checked': model, 'toggle--unchecked': !model }"></div>
	</label>
</template>

<script>
	export default {
		name: "toggle",
		props: {
			value: {
				type: Boolean,
				require: true,
				default: false
			},
			label: {
				type: Object,
				require: true,
				default: () => { return {}}
			},
			color: {
				type: Object,
				require: false,
				default: () => { return {}}
			}
		},
		computed: {
			model: {
				get() {
					return this.value
				},
				set(ev) {
					this.$emit('input', ev)
				}
			}
		},
		methods: {
			handleChange(ev) {
				this.$emit('change', ev.target.value)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vue-codica-toggle{
		position: relative;
		display: inline-block;
		margin: 5px;
		input {
			display: none;
		}
		.label{
			display: block;
			font-size: 10px;
			margin-bottom: 5px;
		}
		.toggle{
			height: 15px;
			width: 36px;
			position: relative;
			border-radius: 30px;
			display: -ms-flex;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			cursor: pointer;
			transition: .2s linear,background-color .2s linear;
			&:after {
				content: "";
				height: 20px;
				width: 20px;
				border-radius: 100px;
				display: block;
				transition: .15s linear,background-color .15s linear;
				position: absolute;
				left: 100%;
				margin-left: -18px;
				cursor: pointer;
				top: -3px;
				box-shadow: 0 1px 5px 0 rgba(0,0,0,.1);
				background-color: #9d9d9d;

			}
			&.toggle--unchecked {
				justify-content: flex-end;
				background-color: #dadada;
				&:after {
					left: 15px;
					background-color: #b3b3b3;
				}
			}
			&.toggle--checked {
				background-color: #aaa;
			}
		}
	}
</style>
