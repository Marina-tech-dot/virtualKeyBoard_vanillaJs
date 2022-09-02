import { storage } from '../../core/utils'
import { standartKeyTemplate } from './klava.functions'

const stor = storage('keyBoard-state') || {}

export class KlavaRowElIterator {
  constructor(data) {
    this.indexData = 0
    this.indexDataAtribute = 0
    this.data = Array.isArray(data) ? data : data[stor.Lang] || data.en
    this.dataAttribute = Array.isArray(data) ? data : data.en
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.indexData < this.data.length) {
          return {
            value: standartKeyTemplate(
              this.data[this.indexData++],
              this.dataAttribute[this.indexDataAtribute++],
            ),
            done: false,
          }
        }
        this.indexData = 0
        this.indexDataAtribute = 0
        return {
          done: true,
          // eslint-disable-next-line no-void
          value: void 0,
        }
      },
    }
  }
}
