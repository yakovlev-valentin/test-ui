import Root from './root.vue'

Root.install = function(Vue) {
	Vue.component(Root.name, Root)
}

export default Root
