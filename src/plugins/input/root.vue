<template>
	<div>
		<textarea :class="[{ 'cu-focus': focus }, defaultClass]" :placeholder="placeholder" class="cu-label" v-if="type === 'textarea'" cols="30" rows="10"></textarea>
		<div v-else class="cu-label">
			<input v-model="data"
			       :class="[{ 'cu-focus': focus }, defaultClass]"
			       @input="handleInput"
			       @blur="handleBlur"
			       @focus="handleFocus"
			       class="cu-input"
			       :disabled="disabled"
			       :min="min"
			       :max="max"
			       :type="changedType">
			<span v-if="label" class="cu-text" :class="{ 'text--raised': focus, disabled: disabled }">{{label}}</span>
			<span v-if="type === 'password'" @click.prevent="toggleShowingPass" class="cu-icon">
				<i class="icon mdi mdi-eye" :class="{ 'mdi-eye-off': passStatus }"></i>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'codica-input',
		props: {
			defaultClass: {
				type: String,
				default: 'primary',
				require: false
			},
			label: {
				type: String,
				default: '',
				require: false
			},
			type: {
				type: String,
				default: 'text',
				require: false
			},
			disabled: {
				type: Boolean,
				default: false,
				require: false
			},
			placeholder: {
				type: String,
				default: '',
				require: false
			},
			min: {
				type: [Number, String]
			},
			max: {
				type: [Number, String]
			}
		},
		data: () => ({
			focus: false,
			data: '',
			passStatus: false,
			changedType: '',
			initType: ''
		}),
		methods: {
			handleFocus(ev) {
				this.focus = true
				this.$emit('focus', ev.target.value)
			},
			handleBlur(ev) {
				if (this.data.length === 0) {
					this.focus = false
				}
				this.$emit('blur', ev.target.value)
			},
			handleInput(ev) {
				this.$emit('input', ev.target.value)
			},
			toggleShowingPass() {
				this.$emit('showPass')
				this.passStatus = !this.passStatus
				if (this.passStatus) {
					this.changedType = 'text'
				} else {
					this.changedType = this.initType
				}
			}
		},
		mounted() {
			this.changedType = this.type
			this.initType = this.type
		}
	}
</script>

<style lang="scss" scoped>
	textarea.cu-label {
		max-height: 600px;
		min-height: 120px;
		z-index: auto;
		position: relative;
		line-height: 24px;
		font-size: 16px;
		transition: none 0s ease 0s;
		margin-top: 0;
		margin-bottom: 0;
		height: 120px;
		background-color: #fff;
		border-color: #dbdbdb;
		color: #363636;
		box-shadow: inset 0 1px 2px hsla(0, 0%, 4%, .1);
		padding: .625em;
		border-radius: 4px;
		outline: none;
		max-width: 100%;
		width: 100%;
		box-sizing: border-box;
	}
	.cu-label {
		position: relative;
		display: flex;
		.cu-input {
			border-radius: 4px;
			height: 13px;
			margin: 1px 1px 0 1px;
			padding: 10px 15px;
			border: 1px solid #ccc;
			outline: none;
			width: 100%;
			box-shadow: inset 0 1px 2px hsla(0, 0%, 4%, .1);
		}
		.cu-text {
			position: absolute;
			z-index: 1;
			pointer-events: none;
			background: #fff;
			bottom: 8px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			color: #80868b;
			left: 8px;
			margin: 0 8px;
			transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1),opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
			width: auto;
			&.text--raised {
				transform: scale(.75) translateY(-22px) translateX(-12px);
			}
			&.disabled {
				background: transparent;
			}
		}
		.cu-icon {
			position: absolute;
			font-size: 19px;
			right: 6px;
			width: 20px;
			top: 0;
			z-index: 2;
			cursor: pointer;
			height: 100%;
			display: flex;
			align-items: center;
		}
	}
</style>
