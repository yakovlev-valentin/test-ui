<template>
  <div>
    <toggle v-model="status" :label="{ text: 'Status' }"></toggle>
    <toggle v-model="active" :label="{ text: 'Active' }"></toggle>
    <toggle v-model="toggle" :label="{ text: 'Toggle' }"></toggle>
  </div>
</template>

<script>
// import index.js from '@/plugins/index.js'
export default {
  name: 'HelloWorld',
  data: () => ({
    status: true,
    active: false,
    toggle: true
  }),
  components: {
    // index.js
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
