(() => {
  var __webpack_modules__ = {
    './src/js/common-module.js': (module) => {
      module.exports = {
        hello() {
          console.log(`I'm from common module.`);
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

  // 多了一个判断是 module 是否是 esm 的特殊处理
  // esm 模块的默认导出的内容会放到 default 属性中 为了在外部都能够直接统一调用模块中的内容而不需要加上
  // default 属性去调用 因此需要进行一下判断再去处理
  (() => {
    __webpack_require__.n = (module) => {
      var getter =
        module && module.__esModule ? () => module['default'] : () => module;
      __webpack_require__.d(getter, { a: getter });
      return getter;
    };
  })();

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
    __webpack_require__.r = (exports) => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();

  var __webpack_exports__ = {};
  (() => {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    var _js_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      './src/js/common-module.js'
    );

    // 调用 __webpack_require__.n() 使得无论是 cjs 还是 esm 中的默认导出内容都能够直接被调用
    // 而不需要添加 default 属性去调用
    var _js_common_module__WEBPACK_IMPORTED_MODULE_0___default =
      __webpack_require__.n(_js_common_module__WEBPACK_IMPORTED_MODULE_0__);
    // ESM 方式加载 CJS 模块

    _js_common_module__WEBPACK_IMPORTED_MODULE_0___default().hello();

    // ESM 方式加载 ESM 模块
    // import moduleEsEs from './js/es-module';
    // moduleEsEs.hello();

    // CJS 方式加载 CJS 模块
    // const moduleCommonCommon = require('./js/common-module');
    // moduleCommonCommon.hello();

    // CJS 方式加载 ESM 模块
    // const moduleCommonEs = require('./js/es-module');
    // moduleCommonEs.default.hello(); // CJS 方式导入 ESM 模块时要加上 default
  })();
})();
