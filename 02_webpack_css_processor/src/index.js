import './less/index.less';
import './scss/index.scss';
import './css/index.css';

(() => {
  // 创建中间的盒子
  const boxEl = createEl('div', 'box');
  boxEl.innerHTML = `
    <p>Hello Webpack!</p>
  `;

  // 创建两个圆圈
  const circleEl1 = createEl('div', 'circle');
  const circleEl2 = createEl('div', 'circle');

  // 将圆圈和盒子作为 body 的子节点
  document.body.appendChild(circleEl1);
  document.body.appendChild(boxEl);
  document.body.appendChild(circleEl2);
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
