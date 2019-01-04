import Toggle from './toggle/index'
import Input from './input/index'
import Field from './field/index'

const components = [
	Toggle,
	Input,
	Field
]

const install = (Vue) => {
	components.forEach(component => {
		Vue.component(component.name, component)
	})
	if (typeof window !== 'undefined' && window.Vue) {
		install(window.Vue);
	}
}

export default install
