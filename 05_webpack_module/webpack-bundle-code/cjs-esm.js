(() => {
  var __webpack_modules__ = {
    './src/js/es-module.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        default: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      const __WEBPACK_DEFAULT_EXPORT__ = {
        hello() {
          console.log(`I'm from es module.`);
        },
      };
    },
  };
  var __webpack_module_cache__ = {};

  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  (() => {
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  (() => {
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    // define __esModule on exports
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();

  var __webpack_exports__ = {};
  (() => {
    // ESM 方式加载 CJS 模块
    // import moduleEsCommon from './js/common-module';
    // moduleEsCommon.hello();

    // ESM 方式加载 ESM 模块
    // import moduleEsEs from './js/es-module';
    // moduleEsEs.hello();

    // CJS 方式加载 CJS 模块
    // const moduleCommonCommon = require('./js/common-module');
    // moduleCommonCommon.hello();

    // CJS 方式加载 ESM 模块
    const moduleCommonEs = __webpack_require__('./src/js/es-module.js');
    moduleCommonEs.default.hello(); // CJS 方式导入 ESM 模块时要加上 default
  })();
})();
