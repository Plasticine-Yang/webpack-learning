(() => {
  // index.js 中用到的所有模块会被放到 __webpack_modules__ 中
  var __webpack_modules__ = {
    // 每个模块都不是直接拿到的 而是放到一个函数中 执行后会将模块的内容挂载到 module.exports 中
    './src/js/common-module.js': (module) => {
      module.exports = {
        hello() {
          console.log(`I'm from common module.`);
        },
      };
    },
  };

  // 用于缓存
  var __webpack_module_cache__ = {};

  // 替代原生的 CommonJS 的 require
  function __webpack_require__(moduleId) {
    // 到缓存中去取模块
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      // 缓存中有模块则直接返回
      return cachedModule.exports;
    }

    // 缓存中没有则添加到缓存中再返回
    var module = (__webpack_module_cache__[moduleId] = {
      // 双重赋值 module 和 缓存项 都指向 { exports: {} } 这一对象
      exports: {},
    });

    // 在 __webpack_modules__ 中找到对应的模块后执行它得到模块的内容
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

    return module.exports;
  }

  // 替代原生的 CommonJS 的 module.exports
  var __webpack_exports__ = {};

  // 入口文件中的代码
  (() => {
    // ESM 方式加载 CJS 模块
    // import moduleEsCommon from './js/common-module';
    // moduleEsCommon.hello();

    // ESM 方式加载 ESM 模块
    // import moduleEsEs from './js/es-module';
    // moduleEsEs.hello();

    // CJS 方式加载 CJS 模块
    const moduleCommonCommon = __webpack_require__('./src/js/common-module.js');
    moduleCommonCommon.hello();

    // CJS 方式加载 ESM 模块
    // const moduleCommonEs = require('./js/es-module');
    // moduleCommonEs.default.hello(); // CJS 方式导入 ESM 模块时要加上 default
  })();
})();
