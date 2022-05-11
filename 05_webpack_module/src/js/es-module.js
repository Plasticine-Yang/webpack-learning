export default {
  hello() {
    console.log(`I'm from es module.`);
  },
};

export const esmVar = 'hello esm';
export function esmFn() {
  console.log('hello esm fn');
}
