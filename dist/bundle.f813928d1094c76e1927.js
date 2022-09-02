/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 174:
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ 659:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ArrowLeft.mp3": 769,
	"./ArrowRight.mp3": 445,
	"./Enter.mp3": 430,
	"./Space.mp3": 266,
	"./Tab.mp3": 506,
	"./backspace.mp3": 950,
	"./capsLock.mp3": 318,
	"./lang.mp3": 787,
	"./microphone.mp3": 473,
	"./shift.mp3": 860,
	"./sound.mp3": 850,
	"./writtenKey.mp3": 554
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 659;

/***/ }),

/***/ 769:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/4d07b928eb653f49e76b.mp3";

/***/ }),

/***/ 445:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/4d07b928eb653f49e76b.mp3";

/***/ }),

/***/ 430:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/83804b84acc395583ed7.mp3";

/***/ }),

/***/ 266:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fc6a2f0fbf25870faf61.mp3";

/***/ }),

/***/ 506:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/ce303137b5c8fb3903a2.mp3";

/***/ }),

/***/ 950:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/97f5198f97e1fce2079b.mp3";

/***/ }),

/***/ 318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fc6a2f0fbf25870faf61.mp3";

/***/ }),

/***/ 787:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/b8d01eb0571acdd075dd.mp3";

/***/ }),

/***/ 473:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/1370fe744d7ad93e877f.mp3";

/***/ }),

/***/ 860:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/a0c2ec8d0e4fca5bb094.mp3";

/***/ }),

/***/ 850:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/1370fe744d7ad93e877f.mp3";

/***/ }),

/***/ 554:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/fc6a2f0fbf25870faf61.mp3";

/***/ }),

/***/ 892:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/17d2419287d03b67e4ac.ico";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./node_modules/html-loader/dist/runtime/getUrl.js
var getUrl = __webpack_require__(174);
var getUrl_default = /*#__PURE__*/__webpack_require__.n(getUrl);
;// CONCATENATED MODULE: ./src/index.html
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(892), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = getUrl_default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"UTF-8\"> <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"> <link rel=\"shortcut icon\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" type=\"image/x-icon\"> <title>Virtual Keyboard</title> </head> <body> <div class=\"wrapper\"> <main class=\"key-bord\" id=\"keyboard\"> </main> </div> </body> </html>";
// Exports
/* harmony default export */ var src = ((/* unused pure expression or super */ null && (code)));
;// CONCATENATED MODULE: ./src/js/core/dom.js
class Dom {
  constructor(el) {
    this.$el = typeof el === 'string' ? document.querySelector(el) : el;
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }

    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }

    return this;
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }

    return this.$el.outerHTML.trim();
  }

  addClass(classes) {
    if (classes) {
      this.$el.classList.add(...classes);
    }

    return this;
  }

  addClassSetTimeout(classes, delay) {
    if (classes) {
      for (let i = 0; i < classes.length; i++) {
        this.$el.classList.add(classes[i]);
      }

      setTimeout(() => {
        for (let i = 0; i < classes.length; i++) {
          this.$el.classList.remove(classes[i]);
        }
      }, delay);
    }

    return this;
  }

  toggleClass(classes) {
    if (classes) {
      this.$el.classList.toggle(...classes);
    }

    return this;
  }

  toggleClassSetTimeout(classes, delay) {
    if (classes) {
      setTimeout(() => {
        for (let i = 0; i < classes.length; i++) {
          this.$el.classList.toggle(classes[i]);
        }
      }, delay);
    }

    return this;
  }

  textContent(text) {
    if (text) {
      this.$el.textContent = text;
    }

    return this;
  }

  addDataAttribute(atrib) {
    if (atrib) {
      for (let i = 0; i < atrib.length; i++) {
        Object.keys(atrib[i]).map(key => {
          this.$el.setAttribute(`data-${key}`, `${atrib[i][key]}`);
        });
      }
    }
  }

  innerText() {
    return this.$el.innerText;
  }

  css(styles = {}) {
    const cssStylesString = Object.entries(styles).map(([key, value]) => `${key}:${value}`).join(';');
    return this.$el.style.cssText = `${cssStylesString}`;
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback);
  }

  find(selector) {
    return this.$el.querySelector(selector);
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector);
  }

  children(pos, parent) {
    return $(parent.$el.children[pos]);
  }

  remove() {
    this.$el.remove();
  }

  hasClass(className) {
    return this.$el.classList.contains(...className);
  }

}

function $(el) {
  return new Dom(el);
}

$.create = (tag, className) => {
  const newEl = document.createElement(tag);

  if (className) {
    newEl.classList.add(className);
  }

  return $(newEl);
};
;// CONCATENATED MODULE: ./src/js/core/Emitter.js
class Emitter {
  constructor() {
    this.listeners = {};
  } // dispatch, fire, trigger
  // уведомляем слушателей, если они есть
  // table.emit('table:select', {a:1})


  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }

    this.listeners[event].forEach(listener => {
      listener(...args);
    });
    return true;
  } // on, listen
  //  подписываемся на увеомления / добавляем нового слушателя
  // formula.subscribe(table:select, ()=>{})


  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] = this.listeners[event].filter(listener => listener !== fn);
    };
  }

} // example
// const emitter = new Emitter()
// const unsubscribe = emitter.subscribe('vladilen', (data) => console.log('Sub', data))
// emitter.subscribe('vladilen', (data) => console.log('Sub', data))
// unsubscribe()
// emitter.emit('vladilen', 42)
;// CONCATENATED MODULE: ./src/js/core/utils.js
function windowParametrs() {
  if (window.innerWidth >= 920) {
    return {
      monicWidth: '860px',
      monicHeight: '368px',
      textareaWidth: '830px',
      textareaHeight: '277px'
    };
  }

  if (window.innerWidth < 920 && window.innerWidth >= 720) {
    return {
      monicWidth: '688px',
      monicHeight: '368px',
      textareaWidth: '660px',
      textareaHeight: '277px'
    };
  }

  return {
    monicWidth: '452px',
    monicHeight: '368px',
    textareaWidth: '425px',
    textareaHeight: '277px'
  };
}
function css(styles = {}) {
  const cssStylesString = Object.entries(styles).map(([key, value]) => `${key}:${value}`).join(';');
  return `${cssStylesString}`;
}
function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}
function unCapitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }

  return string.charAt(0).toLowerCase() + string.slice(1);
}
function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }

  return localStorage.setItem(key, JSON.stringify(data));
}
function isEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  return a === b;
}
;// CONCATENATED MODULE: ./src/js/core/state/KeyBoardSubscriber.js

class StoreSubscriber {
  constructor(store) {
    this.store = store;
    this.sub = null;
    this.prevState = {};
  }

  subscribeComponents(components) {
    this.prevState = this.store.getState();
    this.sub = this.store.subscribe(state => {
      Object.keys(state).forEach(key => {
        if (!isEqual(this.prevState[key], state[key])) {
          components.forEach(component => {
            if (component.isWatching(key)) {
              const changes = {
                [key]: state[key]
              };
              component.storeChanged(changes);
            }
          });
        }
      });
      this.prevState = this.store.getState();
    });
  }

  unsubscribeFromStore() {
    this.sub.unsubscribe();
  }

}
;// CONCATENATED MODULE: ./src/js/components/keyBoard/KeyBoard.js



class KeyBoard {
  constructor(el, options = {}) {
    this.$el = $(el);
    this.components = options.components || [];
    this.emitter = new Emitter();
    this.store = options.store;
    this.subscriber = new StoreSubscriber(this.store);
  }

  getRoot() {
    const $root = $.create('div', 'key-bord__body');
    const componentOptions = {
      emitter: this.emitter,
      store: this.store
    };
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);
      $el.addClass(Component.additionalClasses);
      const component = new Component($el, componentOptions);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    this.subscriber.subscribeComponents(this.components);
    this.components.forEach(Component => Component.init());
  }

}
;// CONCATENATED MODULE: ./src/js/core/DomListeners.js

class DomListener {
  constructor($root, listeners) {
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) throw new Error(`Method ${method} is not implemented in ${this.name || ''} Component`);
      this[method] = this[method].bind(this);
      this.$root.on(listener, this[method]);
    });
  }

}

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`;
}
;// CONCATENATED MODULE: ./src/js/core/KeyBoardComponent.js

class KeyBoardComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.emitter = options.emitter;
    this.unsubscribers = [];
    this.store = options.store;
    this.subscribe = options.subscribe || [];
    this.prepare();
  }

  prepare() {}

  init() {
    this.initDomListeners();
  }

  $emit(event, ...arg) {
    this.emitter.emit(event, ...arg);
  }

  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  $dispatch(action) {
    this.store.dispatch(action);
  }

  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key);
  }

}
;// CONCATENATED MODULE: ./src/js/components/monitor/monitorComponent.template.js

function createMonitor() {
  const styles = css({
    width: windowParametrs().textareaWidth,
    height: windowParametrs().textareaHeight
  });
  return `
      <div class="monic__inner-screen">
        <div class="monic__screen" id="monic">
          <textarea class="key-bord__text" id="written" style="${styles}"></textarea>
        </div>
      </div>
      <div class="monic__panel">
        <div class="monic__item">
          <p class="_icon-keyboard" data-clava=true></p>
        </div>
      </div>
    `;
}
;// CONCATENATED MODULE: ./src/js/redux/actions.js
// actions creators
function addToLS(data) {
  return {
    type: 'ADD_TO_LS',
    data
  };
}
;// CONCATENATED MODULE: ./src/js/components/klava/klavaKeys.js

const stor = storage('keyBoard-state') || {};
const keyBoardRows = [{
  1: {
    1: {
      rowIterator: false,
      appendHTML: `
          <div class="_icon-voice" data-functional="Microphone"></div>
          <div class="circle voice" data-functional="Microphone" id="microphone"></div>
      `,
      dataAttributes: [{
        functional: 'Microphone'
      }],
      classes: false,
      innerText: false
    },
    2: {
      rowIterator: false,
      appendHTML: `
          <div class="_icon-sound" data-functional="Sound"></div>
          <div class="circle sound ${stor.Sound ? 'active' : ''}" data-functional="Sound" id="circle"></div>
        `,
      dataAttributes: [{
        functional: 'Sound'
      }],
      classes: false,
      innerText: false
    },
    3: {
      rowIterator: true,
      keboardRowsValues: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    },
    4: {
      rowIterator: false,
      appendHTML: false,
      dataAttributes: [{
        functional: 'Backspace'
      }],
      classes: ['el-shift-backsp', '_icon-delete'],
      innerText: false
    }
  }
}, {
  2: {
    1: {
      rowIterator: false,
      appendHTML: false,
      dataAttributes: [{
        functional: 'Tab'
      }],
      classes: ['el-shift-backsp', '_icon-tab'],
      innerText: false
    },
    2: {
      rowIterator: true,
      keboardRowsValues: {
        en: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
        ru: ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ']
      }
    }
  }
}, {
  3: {
    1: {
      rowIterator: false,
      appendHTML: `
          <div class="circle capsLock ${stor.CapsLock ? 'active' : ''}" id="CapsLock"></div>
        `,
      dataAttributes: [{
        functional: 'CapsLock'
      }],
      classes: ['el-caps', '_icon-caps'],
      innerText: false
    },
    2: {
      rowIterator: true,
      keboardRowsValues: {
        en: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', ':'],
        ru: ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э']
      }
    },
    3: {
      rowIterator: false,
      appendHTML: false,
      dataAttributes: [{
        functional: 'Enter'
      }],
      classes: ['el-enter', '_icon-enter'],
      innerText: false
    }
  }
}, {
  4: {
    1: {
      rowIterator: false,
      appendHTML: false,
      dataAttributes: [{
        functional: 'Shift'
      }],
      classes: ['el-shift-backsp', '_icon-shift'],
      innerText: false
    },
    2: {
      rowIterator: true,
      keboardRowsValues: {
        en: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', '!', '@'],
        ru: ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', '!', '@']
      }
    }
  }
}, {
  5: {
    1: {
      rowIterator: false,
      appendHTML: `
          <div class="key-bord__el-en ${stor.Lang === 'en' ? '' : 'paint'}" data-functional="Lang" data-lang="en">en</div>
          <div class="key-bord__el-slash" data-functional="Lang">/</div>
          <div class="key-bord__el-ru ${stor.Lang === 'ru' ? '' : 'paint'}" data-functional="Lang" data-lang="ru">ru</div>
        `,
      dataAttributes: [{
        functional: 'Lang'
      }],
      classes: ['en-ru'],
      innerText: false
    },
    2: {
      rowIterator: false,
      appendHTML: false,
      dataAttributes: [{
        functional: 'Space'
      }],
      classes: ['el-space'],
      innerText: ' '
    },
    3: {
      rowIterator: false,
      appendHTML: false,
      dataAttributes: [{
        functional: 'ArrowLeft'
      }],
      classes: ['_icon-left-arrow'],
      innerText: false
    },
    4: {
      rowIterator: false,
      appendHTML: false,
      dataAttributes: [{
        functional: 'ArrowRight'
      }],
      classes: ['_icon-right-arrow'],
      innerText: false
    }
  }
}];
const keysChangerList = {
  ru: {
    q: 'й',
    w: 'ц',
    e: 'у',
    r: 'к',
    t: 'е',
    y: 'н',
    u: 'г',
    i: 'ш',
    o: 'щ',
    p: 'з',
    '[': 'х',
    ']': 'ъ',
    a: 'ф',
    s: 'ы',
    d: 'в',
    f: 'а',
    g: 'п',
    h: 'р',
    j: 'о',
    k: 'л',
    l: 'д',
    ';': 'ж',
    ':': 'э',
    z: 'я',
    x: 'ч',
    c: 'с',
    v: 'м',
    b: 'и',
    n: 'т',
    m: 'ь',
    ',': 'б',
    '.': 'ю',
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    '!': '!',
    '?': '?',
    '@': '@'
  },
  en: {
    q: 'q',
    w: 'w',
    e: 'e',
    r: 'r',
    t: 't',
    y: 'y',
    u: 'u',
    i: 'i',
    o: 'o',
    p: 'p',
    ']': ']',
    '[': '[',
    a: 'a',
    s: 's',
    d: 'd',
    f: 'f',
    g: 'g',
    h: 'h',
    j: 'j',
    k: 'k',
    l: 'l',
    ';': ';',
    ':': ':',
    z: 'z',
    x: 'x',
    c: 'с',
    v: 'v',
    b: 'b',
    n: 'n',
    m: 'm',
    ',': ',',
    '.': '.',
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    '!': '!',
    '?': '?',
    '@': '@'
  },
  simbols: {
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')'
  },
  numbers: {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    0: '0'
  }
};
;// CONCATENATED MODULE: ./src/js/components/monitor/monitor.functions.js



function lightPressedKey(event) {
  let pressedKey = event.key;
  const lang = {
    Lang: ''
  };

  if (pressedKey === ' ') {
    pressedKey = 'Space';
  } else if (pressedKey.charCodeAt() >= 65 && pressedKey.charCodeAt() <= 90 && pressedKey.length === 1) {
    pressedKey = pressedKey.toLowerCase();
    lang.Lang = 'ru';
  } else if (unCapitalize(pressedKey).charCodeAt() >= 1072 && unCapitalize(pressedKey).charCodeAt() <= 1103 && pressedKey.length === 1) {
    const enRuSimbArray = Object.entries(keysChangerList.ru).filter(([enSimb, ruSimb]) => {
      if (unCapitalize(pressedKey) === ruSimb) {
        return enSimb;
      }
    }).flat()[0];
    pressedKey = enRuSimbArray;
    lang.Lang = 'en';
  }

  const keyWrittable = $(document).find(`[data-write= "${pressedKey || unCapitalize(pressedKey)}"]`);
  const keyUnwritableCorrectName = $(document).find(`[data-functional= "${pressedKey}"]`);
  const nesesseryKey = keyWrittable || keyUnwritableCorrectName;

  if (nesesseryKey) {
    $(nesesseryKey).addClassSetTimeout(['key-shown'], 200);
  }

  if (!lang.Lang) {
    if (pressedKey.length === 1) {
      lang.Lang = 'ru';
    }
  }

  return lang;
}
function isCapsOn(event, lang) {
  if (event.getModifierState('CapsLock')) {
    lang = { ...lang,
      Capslock: true
    };
  }

  lang = { ...lang,
    Capslock: false
  };
  return lang;
}

function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  } else if (input.createTextRange) {
    const range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
}

function setCaretToPos(input, pos) {
  setSelectionRange(input, pos, pos);
}
;// CONCATENATED MODULE: ./src/js/components/klava/klava.functions.utils.js

function isItNessesaryKey(arrKeys, keyCode) {
  return !!arrKeys.includes(keyCode);
}
function functionalKeyValue(keyCode) {
  const simb = {
    Enter: '\n',
    Tab: '\t',
    Space: ' '
  };
  return simb[keyCode];
}
function changeStoreTo(keyCode, store) {
  store = store.getState();
  let answer = '';

  if (keyCode !== 'Lang') {
    answer = store ? !store[keyCode] : true;
    return {
      [keyCode]: answer
    };
  }

  answer = store[keyCode] === 'en' ? 'ru' : 'en';
  return {
    [keyCode]: `${answer}`
  };
}
function toggleClassActive(id, keyCode, store) {
  const el = document.querySelector(id);
  store = store.getState();

  if (store[keyCode]) {
    el.classList.remove('active');
    return false;
  }

  el.classList.add('active');
  return true;
}
function indicatePressedCapsLock() {
  const el = document.querySelector('#CapsLock');
  const LocStorage = storage('keyBoard-state');
  const {
    CapsLock
  } = LocStorage;

  if (CapsLock) {
    el.classList.add('active');
  } else {
    el.classList.remove('active');
  }
}
function toggleLangBTN(id, lang) {
  const activeElDataAtrib = lang === 'en' ? 'ru' : 'en';
  const elInactive = document.querySelector(id);
  const elActive = document.querySelector(`[data-lang="${activeElDataAtrib}"]`);
  elInactive.classList.add('paint');
  elActive.classList.remove('paint');
  return false;
}
function importAll(arr, r) {
  r.keys().forEach((s, i) => arr[i] = r(s));
}
function addTitleToSound(soundsList, soundListTitles) {
  const soundListWithTitles = soundsList.map((el, ind) => {
    const title = soundListTitles[ind];
    return {
      [title]: el
    };
  });
  return soundListWithTitles;
}
function soundSRC(soundListWithTitles, key) {
  soundListWithTitles = soundListWithTitles.map(obj => {
    if (Object.keys(obj).join('') === key) {
      return obj[key];
    }

    return '';
  });
  return soundListWithTitles.join('');
}
function toggleClassSetTimeout(el, classes, delay) {
  setTimeout(() => {
    el.classList.toggle(...classes);
  }, delay);
}
;// CONCATENATED MODULE: ./src/js/components/klava/klava.functions.js


 // import animation from '../../../assets/img/animation.svg'


function standartKeyTemplate(value, attribute) {
  const LocStorage = storage('keyBoard-state') || {};
  let textContent = value;

  if (LocStorage.CapsLock) {
    if (typeof value === 'string') {
      textContent = value.toUpperCase();
    }
  }

  return `
    <div class="key-bord__row-el" data-write="${attribute}" data-voice="write">${textContent}</div>
  `;
}
function keyIsEnterSpaceTab(event) {
  const keyCode = event.target.dataset.functional;
  const keys = ['Enter', 'Tab', 'Space'];

  if (isItNessesaryKey(keys, keyCode)) {
    return functionalKeyValue(keyCode);
  }

  return false;
}
function keyIsLangCapsSoundShiftBackspace(event, store) {
  const keyCode = event.target.dataset.functional;
  const keys = ['Lang', 'CapsLock', 'Shift', 'Sound', 'Backspace'];

  if (isItNessesaryKey(keys, keyCode)) {
    return changeStoreTo(keyCode, store);
  }

  return false;
}
function itIsSound(store) {
  toggleClassActive('#circle', 'Sound', store);
}
function itIsCaps(store) {
  toggleClassActive('#CapsLock', 'CapsLock', store);
}
function itIsLang(store, isItInitialState) {
  const storeKeys = store.getState();
  let {
    Lang
  } = storeKeys;
  console.log(Lang);

  if (isItInitialState) {
    Lang = Lang === 'en' ? 'ru' : 'en';
  }

  toggleLangBTN(`[data-lang="${Lang}"]`, Lang);
}
function playSound(event, store) {
  const soundsList = [];
  const soundListTitles = ['ArrowLeft', 'ArrowRight', 'Backspace', 'CapsLock', 'Enter', 'Lang', 'Microphone', 'Shift', 'Sound', 'Space', 'Tab', 'WrittenKey'];
  importAll(soundsList, __webpack_require__(659));
  const soundListWithTitles = addTitleToSound(soundsList, soundListTitles);
  store = store.getState();
  if (!store.Sound) return;
  const audio = document.createElement('audio');
  const key = event.target.dataset.write ? 'WrittenKey' : event.target.dataset.functional;
  audio.src = `${soundSRC(soundListWithTitles, key)}`;
  audio.play();
  audio.volume = 0.7;
}
function fireCapsLangShift(keyIsCapsOrLangOrShift) {
  const elToChange = document.querySelectorAll('[data-write]');
  elToChange.forEach(el => {
    const LocStorage = storage('keyBoard-state');
    const writtenSimbol = el.getAttribute('data-write');

    if (keyIsCapsOrLangOrShift === 'CapsLock') {
      const {
        CapsLock
      } = LocStorage;
      const {
        Lang
      } = LocStorage;

      if (!CapsLock) {
        if (keysChangerList[Lang][writtenSimbol].toUpperCase()) {
          el.textContent = keysChangerList[Lang][writtenSimbol].toUpperCase();
        }
      }

      if (CapsLock) {
        el.textContent = keysChangerList[Lang][writtenSimbol];
      }

      return false;
    }

    if (keyIsCapsOrLangOrShift === 'Shift') {
      const {
        Shift
      } = LocStorage;
      const {
        Lang
      } = LocStorage;
      const {
        CapsLock
      } = LocStorage;

      if (keysChangerList.simbols[writtenSimbol]) {
        if (!Shift) {
          el.textContent = keysChangerList.simbols[writtenSimbol];
        }

        if (Shift) {
          el.textContent = keysChangerList.numbers[writtenSimbol];
        }
      }

      if (keysChangerList.en[writtenSimbol] && !keysChangerList.simbols[writtenSimbol]) {
        if (!Shift) {
          el.textContent = keysChangerList[Lang][writtenSimbol].toUpperCase();
        }

        if (Shift) {
          if (!CapsLock) {
            el.textContent = keysChangerList[Lang][writtenSimbol];
          }
        }
      }
    }

    if (keyIsCapsOrLangOrShift === 'Lang') {
      const {
        Lang
      } = LocStorage;
      const {
        CapsLock
      } = LocStorage;
      const currentLang = Lang === 'ru' ? 'en' : 'ru';

      if (CapsLock) {
        if (keysChangerList[currentLang][writtenSimbol].toUpperCase()) {
          el.textContent = keysChangerList[currentLang][writtenSimbol].toUpperCase();
        }
      } else {
        el.textContent = keysChangerList[currentLang][writtenSimbol];
      }
    }
  });
}
function fireBackspace() {
  const LocStorage = storage('keyBoard-state');
  const {
    Textarea
  } = LocStorage;
  const newValue = Textarea.slice(0, -1);
  return {
    Textarea: newValue
  };
}
function animationPressKey(event) {
  const maxWidth = Math.max(event.target.getBoundingClientRect().width, event.target.getBoundingClientRect().height);
  const leftCoord = event.pageX - event.target.getBoundingClientRect().left - maxWidth / 2;
  const topCoord = event.pageY - event.target.getBoundingClientRect().top - maxWidth / 2;
  const style = css({
    width: `${maxWidth}px`,
    height: `${maxWidth}px`,
    left: `${leftCoord}px`,
    top: `${topCoord}px`
  });
  const pressedKey = event.target.dataset;
  const animationCircle = `
    <div class="animation-circle" style=${style}></div>
    `;

  if (pressedKey.write) {
    const keyTextValue = $(event.target).innerText();
    const $key = $(event.target).html(animationCircle);
    const $animationHTML = $key.children(0, $key);
    $key.append(keyTextValue);
    setTimeout(() => {
      $animationHTML.remove();
    }, 100);
  } else if (pressedKey.functional) {
    const key = event.target;
    key.insertAdjacentHTML('beforeend', animationCircle);
    setTimeout(() => {
      key.removeChild(key.lastChild.previousSibling);
    }, 100);
  }
}
function changeMonitorSize() {
  const clava = $(document.querySelector('.key-bord__clava'));
  const monic = $(document.querySelector('.key-bord__monic'));
  const textarea = $(document.querySelector('.key-bord__text'));
  clava.toggleClass(['comeback']);
  clava.toggleClass(['hidden']);

  if (clava.hasClass(['hidden'])) {
    monic.css({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
      transition: 'all 0.3s ease 0s',
      margin: '0px'
    });
    textarea.css({
      width: `${window.innerWidth - 30}px`,
      height: `${window.innerHeight - 100}px`,
      transition: 'all 0.3s ease 0s'
    });
    clava.css({
      display: 'none'
    });
  } else if (clava.hasClass(['comeback'])) {
    monic.css({
      width: `${windowParametrs().monicWidth}`,
      height: `${windowParametrs().monicHeight}`,
      transition: 'all 0.3s ease 0s',
      'margin-bottom': '16px'
    });
    textarea.css({
      width: `${windowParametrs().textareaWidth}`,
      height: `${windowParametrs().textareaHeight}`,
      transition: 'all 0.3s ease 0s'
    });
    clava.css({
      display: 'block'
    });
  }
}
;// CONCATENATED MODULE: ./src/js/components/monitor/MonitiorComponent.js







class MonitorComponent extends KeyBoardComponent {
  static className = 'key-bord__monic';

  constructor($root, options) {
    super($root, {
      name: 'Monitor',
      listeners: ['click', 'keyup', 'keydown'],
      ...options
    });
  }

  init() {
    super.init();
    this.textarea = this.$root.find('#written');
    this.textarea.focus();
    this.textarea.value = this.store.getState().Textarea;
    this.textarea.scrollTop = this.textarea.scrollHeight;
    this.$on('klava:clickSimbol', text => {
      this.textarea.focus();
      this.pressedWrittenKey(text, this.textarea);
    });
    this.$on('klava:clickUnwrittenSimbol', () => {
      this.textarea.focus();
      this.textarea.scrollTop = this.textarea.scrollHeight;
      console.log('B'); // TODO WAYYYYYY
      // console.log(this.textarea.selectionStart);
      // this.textarea.setEndPoint(this.textarea.selectionStart - 1)
    });
    this.$on('klava:clickBackspace', newTextarea => {
      this.textarea.focus();
      this.addToLS(newTextarea);
      this.textarea.value = this.store.getState().Textarea;
    });
    this.$on('monic:wasKeydown', currentTextarea => {
      this.addToLS({
        Textarea: currentTextarea
      });
    });
    this.$on('monic:clickTabKey', () => {
      this.addToLS({
        Textarea: `${this.store.getState().Textarea}\t`
      });
      this.textarea.value = this.store.getState().Textarea;
    });
    this.$on('monic:pressedKey', () => {
      document.addEventListener('keydown', e => {
        if (e.getModifierState('CapsLock')) {
          this.addToLS({
            CapsLock: true
          });
        } else {
          this.addToLS({
            CapsLock: false
          });
        }

        if (e.getModifierState('Shift')) {
          this.addToLS({
            Shift: true
          });
        } else {
          this.addToLS({
            Shift: false
          });
        }
      });
      indicatePressedCapsLock();
    });
    this.$on('klava:microIsOn', () => {
      this.addToLS({
        Textarea: this.textarea.value
      });
    });
    this.$on('klava:ArrowLeftIsOn', () => {
      this.textarea.focus();
      const currentPos = this.textarea.selectionStart;
      setCaretToPos(this.textarea, currentPos - 1);
    });
  }

  toHTML() {
    return createMonitor();
  }

  addToLS(value) {
    this.$dispatch(addToLS({
      value
    }));
  }

  pressedWrittenKey(text, textarea) {
    const writtenText = this.store.getState().Textarea + text;
    this.addToLS({
      Textarea: writtenText
    });
    textarea.value = this.store.getState().Textarea;
  }

  onClick(event) {
    const isKlavaHider = event.target.dataset.clava;

    if (isKlavaHider) {
      const klavaHider = $(event.target);
      klavaHider.toggleClass(['inactive']);
      this.$emit('monic:clickKlavaHider');
      this.textarea.focus();
    }
  }

  onKeydown(event) {
    this.$emit('monic:pressedKey');
    const pressedKey = event.key;

    if (pressedKey === 'Tab') {
      event.preventDefault();

      document.onkeyup = () => {
        document.onkeyup = null;
        this.$emit('monic:clickTabKey');
      };
    }

    lightPressedKey(event);

    if (lightPressedKey(event).Lang) {
      this.addToLS({
        lastInputWasThroughKeydown: true
      });
      this.addToLS(lightPressedKey(event));
      itIsLang(this.store);
      fireCapsLangShift('Lang');
    }
  }

  onKeyup() {
    this.$emit('monic:wasKeydown', this.textarea.value);
  }

}
;// CONCATENATED MODULE: ./src/js/core/speechRecognitionAPI.js
let recognizing;
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.continuous = true;
speechRecognitionAPI_reset();

recognition.onend = () => {
  console.log('!', JSON.parse(localStorage['keyBoard-state']).Microphone);
};

recognition.onresult = function (event) {
  const el = document.querySelector('#written');

  for (let i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      el.value += event.results[i][0].transcript;
    }
  }
};

function speechRecognitionAPI_reset() {
  recognizing = false;
}

function toggleStartStop() {
  if (recognizing) {
    recognition.stop();
    speechRecognitionAPI_reset();
  } else {
    recognition.start();
    recognizing = true;
  }
}
;// CONCATENATED MODULE: ./src/js/core/state/KeyBoardStateComponent.js

class KeyBoardStateComponent extends KeyBoardComponent {
  constructor(...args) {
    super(...args);
  }

  get template() {
    return JSON.stringify(this.state, null, 2);
  }

  initState(initialState = {}) {
    this.state = { ...initialState
    };
  }

  setState(newState) {
    this.state = { ...this.state,
      ...newState
    };
    this.$root.html(this.template);
  }

}
;// CONCATENATED MODULE: ./src/js/components/modal.window.js/ModalWindow.js
class ModalWindow {
  constructor(options) {
    this.options = options;
    this.modal = '';
    this.Animation_SPEED = 200;
    this.closing = false;
    this.destroyed = false;
  }

  addListener() {
    this.modal.addEventListener('click', listener);
  }

  toHTML() {
    const DEFAULT_WIDTH = '600px';
    const modal = document.createElement('div');
    modal.classList.add('modal');
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
    `);
    document.body.appendChild(modal); // this.addListener()

    this.modal = modal;
  }

  open() {
    this.toHTML();
    console.log('modal', this.modal);
    if (this.destroyed) return; // eslint-disable-next-line no-unused-expressions

    !this.closing && this.modal.classList.add('open');
  }

  close() {
    this.closing = true;
    this.modal.classList.remove('open');
    this.modal.classList.add('hidden');
    setTimeout(() => {
      this.modal.classList.remove('hidden');
      this.closing = false;
    }, this.Animation_SPEED);
  }

  setContent(text) {
    this.modal.querySelector('[data-content]').innerHTML = text;
  }

  destroy() {
    this.modal.remove();
    this.destroyed = true;
    this.modal.removeEventListener('click', listener);
  }

}

const listener = event => event.target.dataset.close ? undefined.modal.close() : false;
;// CONCATENATED MODULE: ./src/js/components/klava/KlavaRowElIteratror.js


const KlavaRowElIteratror_stor = storage('keyBoard-state') || {};
class KlavaRowElIterator {
  constructor(data) {
    this.indexData = 0;
    this.indexDataAtribute = 0;
    this.data = Array.isArray(data) ? data : data[KlavaRowElIteratror_stor.Lang] || data.en;
    this.dataAttribute = Array.isArray(data) ? data : data.en;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.indexData < this.data.length) {
          return {
            value: standartKeyTemplate(this.data[this.indexData++], this.dataAttribute[this.indexDataAtribute++]),
            done: false
          };
        }

        this.indexData = 0;
        this.indexDataAtribute = 0;
        return {
          done: true,
          // eslint-disable-next-line no-void
          value: void 0
        };
      }
    };
  }

}
;// CONCATENATED MODULE: ./src/js/components/klava/klavaComponent.templates.js
/* eslint-disable no-restricted-syntax */



function createKeyBoard($root) {
  return new Promise(resolve => {
    for (let i = 0; i < keyBoardRows.length; i++) {
      const $rootRow = $.create('div', 'key-bord__row');
      const keyBoardRowsEl = Object.values(keyBoardRows[i][i + 1]);
      keyBoardRowsEl.forEach(el => {
        if (!el.rowIterator) {
          const $rowElHTML = $.create('div', 'key-bord__row-el');
          $rowElHTML.addClass(el.classes).textContent(el.innerText).addDataAttribute(el.dataAttributes);
          $rowElHTML.html(el.appendHTML);
          $rootRow.append($rowElHTML);
        } else {
          const iterator = new KlavaRowElIterator(el.keboardRowsValues);

          for (const standartKeys of iterator) {
            $rootRow.$el.insertAdjacentHTML('beforeend', standartKeys);
          }
        }
      });
      $root.append($rootRow);
    }

    resolve($root);
  });
}
;// CONCATENATED MODULE: ./src/js/components/klava/KlavaComponent.js








class KlavaComponent extends KeyBoardStateComponent {
  static className = 'key-bord__clava';
  static additionalClasses = ['comeback'];

  constructor($root, options) {
    super($root, {
      name: 'Klava',
      listeners: ['click'],
      ...options
    });
  }

  prepare() {
    this.addToLS({
      Shift: false,
      Lang: 'en'
    });
  }

  init() {
    super.init();
    this.$on('monic:clickKlavaHider', () => {
      changeMonitorSize();
    });
  }

  async toHTML() {
    try {
      this.$root = await createKeyBoard(this.$root);
      itIsLang(this.store, true);
    } catch {
      console.warn('Error in painting LangBTN on initial state');
    }
  }

  addToLS(value) {
    this.$dispatch(addToLS({
      value
    }));
  }

  onClick(event) {
    animationPressKey(event);
    playSound(event, this.store);

    if (this.store.getState().lastInputWasThroughKeydown) {
      const Lang = this.store.getState().Lang === 'ru' ? {
        Lang: 'en'
      } : {
        Lang: 'ru'
      };
      this.addToLS(Lang);
      this.addToLS({
        lastInputWasThroughKeydown: false
      });
    }

    const isKeyWritable = event.target.dataset.write;
    const isKeyUnwritable = event.target.dataset.functional;

    if (isKeyWritable) {
      const simbol = $(event.target).innerText();
      this.$emit('klava:clickSimbol', simbol);

      if (this.store.getState().Shift) {
        fireCapsLangShift('Shift');
        this.addToLS({
          Shift: false
        });
      }
    } else if (keyIsEnterSpaceTab(event)) {
      this.$emit('klava:clickSimbol', keyIsEnterSpaceTab(event));
    } else if (keyIsLangCapsSoundShiftBackspace(event, this.store)) {
      const key = event.target.dataset.functional;
      const newStateValue = keyIsLangCapsSoundShiftBackspace(event, this.store);

      if (key === 'Backspace') {
        this.$emit('klava:clickBackspace', fireBackspace());
      } else if (key === 'CapsLock') {
        itIsCaps(this.store);
        fireCapsLangShift('CapsLock');
      } else if (key === 'Shift') {
        fireCapsLangShift('Shift');
      } else if (key === 'Lang') {
        itIsLang(this.store);
        fireCapsLangShift('Lang');
      } else if (key === 'Sound') {
        itIsSound(this.store);
      }

      this.$emit('klava:clickUnwrittenSimbol');
      this.addToLS(newStateValue);
    }

    if (isKeyUnwritable === 'Microphone') {
      this.addToLS({
        Microphone: !this.store.getState().Microphone
      });
      toggleClassActive('#microphone', 'Microphone', this.store);
      toggleStartStop();
      const options = {
        title: 'Your speech is turning into the text right now',
        closable: true,
        content: 'Press microphone again to stop it.',
        width: '350px'
      };
      const modal = new ModalWindow(options);

      if (!this.store.getState().Microphone) {
        modal.open();
        setTimeout(() => {
          modal.destroy();
        }, 5000);
      }

      setTimeout(() => {
        this.$emit('klava:microIsOn');
      }, 500);
    }

    if (isKeyUnwritable === 'ArrowLeft') {
      this.$emit('klava:ArrowLeftIsOn');
    }
  }

}
;// CONCATENATED MODULE: ./src/js/core/state/CreateStore.js
function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({ ...initialState
  }, {
    type: '__INIT__'
  });
  let listeners = [];
  return {
    subscribe(fn) {
      listeners.push(fn);
      return {
        unsubscribe() {
          listeners = listeners.filter(l => l !== fn);
        }

      };
    },

    dispatch(action) {
      state = rootReducer(state, action);
      listeners.forEach(listener => listener(state));
    },

    getState() {
      return JSON.parse(JSON.stringify(state));
    }

  };
}
;// CONCATENATED MODULE: ./src/js/redux/rootReducer.js
function rootReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_LS':
      const filed = Object.keys(action.data.value).join('');
      const pervState = action.data.value[filed];
      return { ...state,
        [filed]: pervState
      };

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./src/js/redux/initialState.js

const defaultState = {
  Lang: 'en',
  CapsLock: false,
  Sound: false,
  Shift: false,
  Textarea: '',
  Microphone: false
};
const initialState = storage('keyBoard-state') ? storage('keyBoard-state') : defaultState;
;// CONCATENATED MODULE: ./src/js/script.js
 // eslint-disable-next-line no-unused-vars









const store = createStore(rootReducer, initialState);
store.subscribe(state => {
  storage('keyBoard-state', state);
});
const virtualKeyboard = new KeyBoard('#keyboard', {
  components: [MonitorComponent, KlavaComponent],
  store
});
virtualKeyboard.render();
}();
/******/ })()
;