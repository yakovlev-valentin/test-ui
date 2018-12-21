import Toggle from './toggle/index'

const components = [
	Toggle
]

const install = function(Vue, options = {}) {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
	if (typeof window !== 'undefined' && window.Vue) {
		install(window.Vue);
	}
}

export default install
