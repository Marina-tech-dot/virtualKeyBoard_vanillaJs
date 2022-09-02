export class ModalWindow {
  constructor(options) {
    this.options = options
    this.modal = ''
    this.Animation_SPEED = 200
    this.closing = false
    this.destroyed = false
  }

  addListener() {
    this.modal.addEventListener('click', listener)
  }

  toHTML() {
    const DEFAULT_WIDTH = '600px'
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal__overlay" data-close=true>
            <div class="modal__window" style="width: ${this.options.width || DEFAULT_WIDTH}">
                <div class="modal__header">
                    <span class="modal__title">${this.options.title || ''}</span>
                    ${this.options.closable ? '<span class="modal__close" data-close=true>&times;</span>' : ''}
                </div>
                <div class="modal__body" data-content>
                    ${this.options.content || ''} 
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    // this.addListener()
    this.modal = modal
  }

  open() {
    this.toHTML()
    console.log('modal', this.modal);
    if (this.destroyed) return
    // eslint-disable-next-line no-unused-expressions
    !this.closing && this.modal.classList.add('open')
  }

  close() {
    this.closing = true
    this.modal.classList.remove('open')
    this.modal.classList.add('hidden')

    setTimeout(() => {
      this.modal.classList.remove('hidden')
      this.closing = false
    }, this.Animation_SPEED);
  }

  setContent(text) {
    this.modal.querySelector('[data-content]').innerHTML = text
  }

  destroy() {
    this.modal.remove()
    this.destroyed = true
    this.modal.removeEventListener('click', listener)
  }
}

const listener = (event) => (event.target.dataset.close ? this.modal.close() : false)
