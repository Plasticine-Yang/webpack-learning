// ESM 方式加载 CJS 模块
// import moduleEsCommon from './js/common-module';
// moduleEsCommon.hello();

// ESM 方式加载 ESM 模块
import moduleEsEs, { esmVar, esmFn } from './js/es-module';
moduleEsEs.hello();
console.log(esmVar);
esmFn();

// CJS 方式加载 CJS 模块
// const moduleCommonCommon = require('./js/common-module');
// moduleCommonCommon.hello();

// CJS 方式加载 ESM 模块
// const moduleCommonEs = require('./js/es-module');
// moduleCommonEs.default.hello(); // CJS 方式导入 ESM 模块时要加上 default
