export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  // уведомляем слушателей, если они есть
  // table.emit('table:select', {a:1})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach((listener) => {
      listener(...args)
    })
    return true
  }

  // on, listen
  //  подписываемся на увеомления / добавляем нового слушателя
  // formula.subscribe(table:select, ()=>{})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] = this.listeners[event].filter((listener) => listener !== fn)
    }
  }
}

// example
// const emitter = new Emitter()
// const unsubscribe = emitter.subscribe('vladilen', (data) => console.log('Sub', data))
// emitter.subscribe('vladilen', (data) => console.log('Sub', data))
// unsubscribe()
// emitter.emit('vladilen', 42)
