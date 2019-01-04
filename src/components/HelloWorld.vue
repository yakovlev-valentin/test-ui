<template>
  <section style="width: 500px; margin: auto">
	  <!--<btn-toggle></btn-toggle>-->
	  <inpt></inpt>
  </section>
</template>

<script>
import btnToggle from './components/tog'
import inpt from './components/input'
export default {
  name: 'HelloWorld',
	components: {
		btnToggle,
		inpt
	}
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
