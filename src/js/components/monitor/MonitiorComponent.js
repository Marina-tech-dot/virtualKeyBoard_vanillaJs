import { KeyBoardComponent } from '../../core/KeyBoardComponent';
import { createMonitor } from './monitorComponent.template';
import * as actions from '../../redux/actions';
import { $ } from '../../core/dom';
import { lightPressedKey, setCaretToPos } from './monitor.functions';
import { fireCapsLangShift, itIsLang } from '../klava/klava.functions';
import { indicatePressedCapsLock } from '../klava/klava.functions.utils';

export class MonitorComponent extends KeyBoardComponent {
  static className = 'key-bord__monic'

  constructor($root, options) {
    super($root, {
      name: 'Monitor',
      listeners: ['click', 'keyup', 'keydown'],
      ...options,
    })
  }

  init() {
    super.init()
    this.textarea = this.$root.find('#written')
    this.textarea.focus()
    this.textarea.value = this.store.getState().Textarea
    this.textarea.scrollTop = this.textarea.scrollHeight;

    this.$on('klava:clickSimbol', (text) => {
      this.textarea.focus()
      this.pressedWrittenKey(text, this.textarea)
    })
    this.$on('klava:clickUnwrittenSimbol', () => {
      this.textarea.focus()
      this.textarea.scrollTop = this.textarea.scrollHeight
      console.log('B');
      // TODO WAYYYYYY
      // console.log(this.textarea.selectionStart);
      // this.textarea.setEndPoint(this.textarea.selectionStart - 1)
    })
    this.$on('klava:clickBackspace', (newTextarea) => {
      this.textarea.focus()
      this.addToLS(newTextarea)
      this.textarea.value = this.store.getState().Textarea
    })
    this.$on('monic:wasKeydown', (currentTextarea) => {
      this.addToLS({ Textarea: currentTextarea })
    })
    this.$on('monic:clickTabKey', () => {
      this.addToLS({ Textarea: `${this.store.getState().Textarea}\t` })
      this.textarea.value = this.store.getState().Textarea
    })
    this.$on('monic:pressedKey', () => {
      document.addEventListener('keydown', (e) => {
        if (e.getModifierState('CapsLock')) {
          this.addToLS({ CapsLock: true })
        } else {
          this.addToLS({ CapsLock: false })
        }
        if (e.getModifierState('Shift')) {
          this.addToLS({ Shift: true })
        } else {
          this.addToLS({ Shift: false })
        }
      });
      indicatePressedCapsLock()
    })
    this.$on('klava:microIsOn', () => {
      this.addToLS({ Textarea: this.textarea.value })
    })
    this.$on('klava:ArrowLeftIsOn', () => {
      this.textarea.focus()
      const currentPos = this.textarea.selectionStart
      setCaretToPos(this.textarea, currentPos - 1)
    })
  }

  toHTML() {
    return createMonitor()
  }

  addToLS(value) {
    this.$dispatch(actions.addToLS({
      value,
    }))
  }

  pressedWrittenKey(text, textarea) {
    const writtenText = this.store.getState().Textarea + text
    this.addToLS({ Textarea: writtenText })
    textarea.value = this.store.getState().Textarea
  }

  onClick(event) {
    const isKlavaHider = event.target.dataset.clava
    if (isKlavaHider) {
      const klavaHider = $(event.target)
      klavaHider.toggleClass(['inactive'])
      this.$emit('monic:clickKlavaHider')
      this.textarea.focus()
    }
  }

  onKeydown(event) {
    this.$emit('monic:pressedKey')
    const pressedKey = event.key
    if (pressedKey === 'Tab') {
      event.preventDefault()
      document.onkeyup = () => {
        document.onkeyup = null
        this.$emit('monic:clickTabKey')
      }
    }
    lightPressedKey(event)

    if (lightPressedKey(event).Lang) {
      this.addToLS({ lastInputWasThroughKeydown: true })
      this.addToLS(lightPressedKey(event))
      itIsLang(this.store)
      fireCapsLangShift('Lang')
    }
  }

  onKeyup() {
    this.$emit('monic:wasKeydown', this.textarea.value)
  }
}
