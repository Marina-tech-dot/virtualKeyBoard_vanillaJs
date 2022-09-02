/* eslint-disable no-restricted-syntax */
import { $ } from '../../core/dom'
import { keyBoardRows } from './klavaKeys'
import { KlavaRowElIterator } from './KlavaRowElIteratror'

export function createKeyBoard($root) {
  return new Promise((resolve) => {
    for (let i = 0; i < keyBoardRows.length; i++) {
      const $rootRow = $.create('div', 'key-bord__row')
      const keyBoardRowsEl = Object.values(keyBoardRows[i][i + 1])

      keyBoardRowsEl.forEach((el) => {
        if (!el.rowIterator) {
          const $rowElHTML = $.create('div', 'key-bord__row-el')
          $rowElHTML.addClass(el.classes).textContent(el.innerText)
            .addDataAttribute(el.dataAttributes)
          $rowElHTML.html(el.appendHTML)
          $rootRow.append($rowElHTML)
        } else {
          const iterator = new KlavaRowElIterator(el.keboardRowsValues)
          for (const standartKeys of iterator) {
            $rootRow.$el.insertAdjacentHTML('beforeend', standartKeys)
          }
        }
      })
      $root.append($rootRow)
    }
    resolve($root)
  })
}
