<template>
	<div>
		<h1>Toggle buttons</h1>
		<h2>Visual:</h2>
		<codica-toggle :styled="['bold']" v-model="status" :label="{ defaultText: 'Status' }"></codica-toggle>
		<codica-toggle v-model="status" :label="{ defaultText: 'Status' }"></codica-toggle>
		<h2>Status text:</h2>
		<codica-toggle :styled="['bold']" v-model="status" :label="{inActiveText: 'Inactive', activeText: 'Active' }"></codica-toggle>
		<codica-toggle v-model="active" :label="{ inActiveText: 'Inactive', activeText: 'Active' }"></codica-toggle>
		<codica-toggle v-model="toggle" :label="{ defaultText: 'Toggle' }"></codica-toggle>
		<h2>
			<codica-toggle v-model="active">
				<template slot="label">
					<img style="width: 30px" src="../../assets/logo.png" alt="">
				</template>
			</codica-toggle>
		</h2>
	</div>
</template>

<script>
	export default {
		name: "tog",
		data: () => ({
			status: true,
			active: false,
			toggle: true
		})
	}
</script>

<style scoped>

</style>
