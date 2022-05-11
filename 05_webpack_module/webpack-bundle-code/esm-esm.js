(() => {
  'use strict';
  var __webpack_modules__ = {
    './src/js/es-module.js': (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        // default 将会被放到 exports 对象中
        default: () => __WEBPACK_DEFAULT_EXPORT__,
        esmFn: () => /* binding */ esmFn,
        esmVar: () => /* binding */ esmVar,
      });

      // 模块中的内容会作为 default 函数的返回值返回 因此要使用模块的内容需要这样：
      // const foo = __webpack_require__('module-name');
      // foo.default.hello(); -- default 现在是 foo 的 getter 会被自动调用，因此不需要我们手动调用
      const __WEBPACK_DEFAULT_EXPORT__ = {
        hello() {
          console.log(`I'm from es module.`);
        },
      };

      const esmVar = 'hello esm';
      function esmFn() {
        console.log('hello esm fn');
      }
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
    /**
     * 遍历 definition 对象的每一个属性 如果在 exports 中不存在该属性时则将其添加进去
     * @param {any} exports 存放模块导出内容的对象
     * @param {any} definition
     */
    __webpack_require__.d = (exports, definition) => {
      for (var key in definition) {
        // key 是属于 definition 且 不是 exports 的属性时
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          // 将 key 添加到 exports 中
          Object.defineProperty(exports, key, {
            enumerable: true,
            // 设置 getter 代理 调用 definition 中对 key 的 getter 代理
            get: definition[key],
          });
        }
      }
    };
  })();

  (() => {
    /**
     * 判断 prop 是否是属于 obj 自身的属性而不是原型链上的属性
     * @param {any} obj 对象
     * @param {string | Symbol} prop 属性名
     */
    __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
  })();

  (() => {
    // 给 __webpack_require__ 函数对象添加一个 r 方法
    /**
     * 给 exports 对象添加一个 __esModule 属性 并且在支持 Symbol 的环境下还会添加一个额外的属性
     * @param {any} exports 存放模块中导出内容的对象
     */
    __webpack_require__.r = (exports) => {
      // 判断是否支持 Symbol
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        // 支持 Symbol 时给 exports 对象添加一个属性 [Symbol.toStringTag]: 'Module'
        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      }

      // 添加一个属性 __esModule: true
      Object.defineProperty(exports, '__esModule', { value: true });
    };
  })();

  var __webpack_exports__ = {};
  (() => {
    __webpack_require__.r(__webpack_exports__);
    var _js_es_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      './src/js/es-module.js'
    );
    // ESM 方式加载 CJS 模块
    // import moduleEsCommon from './js/common-module';
    // moduleEsCommon.hello();

    // ESM 方式加载 ESM 模块

    // 默认导出的内容被挂载到 default 属性中
    _js_es_module__WEBPACK_IMPORTED_MODULE_0__['default'].hello();
    console.log(_js_es_module__WEBPACK_IMPORTED_MODULE_0__.esmVar);
    (0, _js_es_module__WEBPACK_IMPORTED_MODULE_0__.esmFn)();

    // CJS 方式加载 CJS 模块
    // const moduleCommonCommon = require('./js/common-module');
    // moduleCommonCommon.hello();

    // CJS 方式加载 ESM 模块
    // const moduleCommonEs = require('./js/es-module');
    // moduleCommonEs.default.hello(); // CJS 方式导入 ESM 模块时要加上 default
  })();
})();
