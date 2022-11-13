import { css, windowParametrs } from '../../core/utils'

export function createMonitor() {
  const styles = css({
    width: windowParametrs().textareaWidth,
    height: windowParametrs().textareaHeight,
  })

  return `
      <div class="monic__inner-screen">
        <div class="monic__screen" id="monic">
          <textarea class="key-bord__text" id="written" style="${styles}"></textarea>
          <div class="interim">
            <p class="interim__result"></p>
          </div>
        </div>
      </div>
      <div class="monic__panel">
        <div class="monic__item">
          <p class="_icon-keyboard" data-clava=true></p>
        </div>
      </div>
    `;
}
