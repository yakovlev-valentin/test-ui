import Toggle from './toggle/index'
import Input from './input/index'
import Field from './field/index'

import { use, registerComponentProgrammatic } from '../utils/plugins'

const components = [
	Toggle,
	Input,
	Field
]

const VuiCodica = {
	install(Vue, options = {}) {
		for (let componentKey in components) {
			Vue.use(components[componentKey])
		}
		registerComponentProgrammatic(Vue, '$vui')
	}
}

use(VuiCodica)
export default VuiCodica
