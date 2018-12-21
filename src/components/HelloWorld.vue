<template>
  <div>
	  <div>
		  <h1>Toggle buttons</h1>
		  <h2>Visual:</h2>
		  <toggle :styled="['bold']" v-model="status" :label="{ defaultText: 'Status' }"></toggle>
		  <toggle v-model="status" :label="{ defaultText: 'Status' }"></toggle>
			<h2>Status text:</h2>
		  <toggle :styled="['bold']" v-model="status" :label="{inActiveText: 'Inactive', activeText: 'Active' }"></toggle>
		  <toggle v-model="active" :label="{ inActiveText: 'Inactive', activeText: 'Active' }"></toggle>
		  <toggle v-model="toggle" :label="{ defaultText: 'Toggle' }"></toggle>
		  <h2>
			  <toggle v-model="active">
				  <template slot="label">
					  <img style="width: 30px" src="../assets/logo.png" alt="">
				  </template>
			  </toggle>
		  </h2>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    status: true,
    active: false,
    toggle: true
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
