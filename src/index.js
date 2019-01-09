import Toggle from './plugins/toggle'
import Input from './plugins/input'
import Field from './plugins/field'

import { use, registerComponentProgrammatic } from './utils/plugins'

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
