import './css/index.css';

(() => {
  const boxEl = createEl('div', 'box');

  document.body.appendChild(boxEl);
})();

/**
 * 创建指定标签和类名的 DOM 元素
 * @param {string} elTag 标签名
 * @param {string} className 类名
 * @returns HTMLElement DOM 元素
 */
function createEl(elTag, className) {
  const el = document.createElement(elTag);

  el.className = className;

  return el;
}
