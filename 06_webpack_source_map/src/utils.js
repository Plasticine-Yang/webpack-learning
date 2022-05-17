function errorFn() {
  console.log('hello error');

  throw new Error('something wrong...');
}

function errorFn1() {
  const foo = 'foo';
  const bar = 'bar';

  const say = () => {
    console.log('hello');
  };

  say();

  console.log(1 + 1, 2 + 2, aaa);
}

module.exports = { errorFn, errorFn1 };
