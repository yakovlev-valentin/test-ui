<template>
	<label tabindex="0" class="vue-codica-toggle">
		<span class="label" v-if="labelText.length">
			<span>{{labelText}}</span>
		</span>
		<slot name="label"></slot>
		<input
				v-model="model"
				@change="handleChange" type="checkbox">
		<div class="toggle" :class="[{ 'toggle--checked': model, 'toggle--unchecked': !model }, addBEMclass]"></div>
	</label>
</template>

<script>
	export default {
		name: "codica-toggle",
		props: {
			styled: {
				type: Array,
				require: false,
				default: () => []
			},
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
			labelText() {
				if (this.value && this.label.activeText) {
					return this.label.activeText
				} else if (!this.value && this.label.inActiveText) {
					return this.label.inActiveText
				} else {
					return this.label.defaultText || ''
				}
			},
			model: {
				get() {
					return this.value
				},
				set(ev) {
					this.$emit('input', ev)
				}
			},
			addBEMclass() {
				return this.styled.map(item => { return `toggle--${item}` })
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
	@import '~@/styles/_variables';

	.vue-codica-toggle{
		position: relative;
		display: inline-block;
		margin: 5px;
		outline: none;
		&:focus input[type=checkbox]+.toggle {
			box-shadow: 0 0 6px $primary-invert;
		}
		&:focus input[type=checkbox]:checked+.toggle {
			box-shadow: 0 0 6px $primary;
		}
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
				background: #fff;
			}
			&.toggle--unchecked {
				justify-content: flex-end;
				background-color: $primary-invert;
				&:after {
					left: 15px;
					background-color: $primary;
				}
			}
			&.toggle--checked {
				background-color: $primary;
				&:after {
					background-color: $primary-invert;
				}
			}
			&.toggle--bold {
				height: 26px;
				width: 51px;
				&:after {
					left: 22px;
					top: 3px;
					background: #fff;
				}
			}
			&.toggle--checked.toggle--bold {
				&:after {
					left: 44px;
				}
			}
		}
	}
</style>
