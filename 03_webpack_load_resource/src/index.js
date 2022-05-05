import './css/index.css';

// ESModule 或者 CommonJS 方式将图片作为模块使用
import img1 from './img/img1.jpg';
// const img1 = require('./img/img.jpg').default;

// 使用 iconfont 字体图标
import './font/iconfont.css';

// Symbol 方式使用 iconfont 字体图标
import './font/iconfont';

(() => {
  const init = () => {
    const el = document.createElement('div');

    // 1. 使用图片 -- 通过 img 标签的 src 属性
    const fooImg = new Image();
    fooImg.src = img1;
    fooImg.style.width = '300px';
    fooImg.style.height = '300px';
    fooImg.style.objectFit = 'cover';

    // 2. 使用图片 -- 通过 css 设置 background-image 属性
    const barEl = document.createElement('div');
    barEl.style.width = '300px';
    barEl.style.height = '300px';
    barEl.className = 'bg-img';

    // 3. 使用字体图标
    const iconEl = document.createElement('i');
    iconEl.style.fontSize = '128px';
    iconEl.className = 'iconfont icon-shopping';

    // 4. Symbol 方式使用字体图标
    const symbolIconEl = document.createElement('svg');
    const useEl = document.createElement('use');
    useEl.setAttribute('xlink:href', '#icon-shopping');
    symbolIconEl.className = 'icon';
    symbolIconEl.ariaHidden = true;
    symbolIconEl.appendChild(useEl);

    el.appendChild(fooImg);
    el.appendChild(barEl);
    el.appendChild(iconEl);
    el.appendChild(symbolIconEl);

    document.body.appendChild(el);
  };

  init();
})();
