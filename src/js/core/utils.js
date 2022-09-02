export function windowParametrs() {
  if (window.innerWidth >= 920) {
    return {
      monicWidth: '860px',
      monicHeight: '368px',
      textareaWidth: '830px',
      textareaHeight: '277px',
    }
  } if (window.innerWidth < 920 && window.innerWidth >= 720) {
    return {
      monicWidth: '688px',
      monicHeight: '368px',
      textareaWidth: '660px',
      textareaHeight: '277px',
    }
  }
  return {
    monicWidth: '452px',
    monicHeight: '368px',
    textareaWidth: '425px',
    textareaHeight: '277px',
  }
}

export function css(styles = {}) {
  const cssStylesString = Object.entries(styles).map(([key, value]) => `${key}:${value}`).join(';')
  return `${cssStylesString}`
}

export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function unCapitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toLowerCase() + string.slice(1)
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  return localStorage.setItem(key, JSON.stringify(data))
}

export function isEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  return a === b
}
