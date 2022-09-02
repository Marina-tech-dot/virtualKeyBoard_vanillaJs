import { capitalize } from './utils'

export class DomListener {
  constructor($root, listeners) {
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) throw new Error(`Method ${method} is not implemented in ${this.name || ''} Component`)
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }
}

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`
}
