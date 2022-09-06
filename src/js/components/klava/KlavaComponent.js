/* eslint-disable no-unused-vars */
import { $ } from '../../core/dom';
import { toggleStartStop } from '../../core/speechRecognitionAPI';
import { KeyBoardStateComponent } from '../../core/state/KeyBoardStateComponent';
import * as actions from '../../redux/actions';
import { ModalWindow } from '../modal.window.js/ModalWindow';
import { cursorPositionAndTextarea } from '../monitor/monitor.functions';

import {
  animationPressKey,
  changeMonitorSize,
  fireBackspace,
  fireCapsLangShift,
  itIsCaps, itIsLang, itIsSound, keyIsEnterSpaceTab, keyIsLangCapsSoundShiftBackspace, playSound,
} from './klava.functions';
import { toggleClassActive } from './klava.functions.utils';
import { createKeyBoard } from './klavaComponent.templates';

export class KlavaComponent extends KeyBoardStateComponent {
  static className = 'key-bord__clava'

  static additionalClasses = ['comeback']

  constructor($root, options) {
    super($root, {
      name: 'Klava',
      listeners: ['click'],
      ...options,
    })
  }

  prepare() {
    this.addToLS({ Shift: false, Lang: 'en' })
  }

  init() {
    super.init()

    this.$on('monic:clickKlavaHider', () => {
      changeMonitorSize()
    })
  }

  async toHTML() {
    try {
      this.$root = await createKeyBoard(this.$root)
      itIsLang(this.store, true)
    } catch {
      console.warn('Error in painting LangBTN on initial state')
    }
  }

  addToLS(value) {
    this.$dispatch(actions.addToLS({
      value,
    }))
  }

  onClick(event) {
    event.preventDefault()
    this.addToLS({ setSelectionEnd: cursorPositionAndTextarea().currentCursorPos })

    const wasLastPressedKeydown = this.store.getState().lastInputWasThroughKeydown
    if (wasLastPressedKeydown) {
      const Lang = this.store.getState().Lang === 'ru' ? { Lang: 'en' } : { Lang: 'ru' }
      this.addToLS(Lang)
      this.addToLS({ lastInputWasThroughKeydown: false })
    }

    const isKeyWritable = event.target.dataset.write
    const isKeyUnwritable = event.target.dataset.functional
    if (isKeyWritable) {
      const simbol = $(event.target).innerText()
      this.$emit('klava:clickSimbol', simbol)
      if (this.store.getState().Shift) {
        fireCapsLangShift('Shift')
        this.addToLS({ Shift: false })
      }
    } else if (keyIsEnterSpaceTab(event)) {
      this.$emit('klava:clickSimbol', keyIsEnterSpaceTab(event))
    } else if (keyIsLangCapsSoundShiftBackspace(event, this.store)) {
      const key = event.target.dataset.functional
      const newStateValue = keyIsLangCapsSoundShiftBackspace(event, this.store)
      if (key === 'Backspace') {
        this.$emit('klava:clickBackspace', fireBackspace())
      } else if (key === 'CapsLock') {
        itIsCaps(this.store)
        fireCapsLangShift('CapsLock')
      } else if (key === 'Shift') {
        fireCapsLangShift('Shift')
      } else if (key === 'Lang') {
        itIsLang(this.store)
        fireCapsLangShift('Lang')
      } else if (key === 'Sound') {
        itIsSound(this.store)
      }

      this.$emit('klava:clickUnwrittenSimbol')
      this.addToLS(newStateValue)
    }
    if (isKeyUnwritable === 'Microphone') {
      // распознаватель голоса не доделан: не получается менять состяние локал сторэдж.

      // this.addToLS(
      //   { Microphone: !this.store.getState().Microphone },
      // )
      // toggleClassActive('#microphone', 'Microphone', this.store)
      // toggleStartStop()
      // this.$emit('klava:microIsOn')
    }

    if (isKeyUnwritable === 'ArrowLeft') {
      event.preventDefault()
      this.$emit('klava:ArrowLeftIsOn')
    }
    if (isKeyUnwritable === 'ArrowRight') {
      event.preventDefault()
      this.$emit('klava:ArrowRightIsOn')
    }

    animationPressKey(event)
    playSound(event, this.store)
  }
}
