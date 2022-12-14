import { KeyBoardComponent } from '../KeyBoardComponent'

export class KeyBoardStateComponent extends KeyBoardComponent {
  constructor(...args) {
    super(...args)
  }

  get template() {
    return JSON.stringify(this.state, null, 2)
  }

  initState(initialState = {}) {
    this.state = { ...initialState }
  }

  setState(newState) {
    this.state = { ...this.state, ...newState }
    this.$root.html(this.template)
  }
}
