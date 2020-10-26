const hello = () => 'Hello!';
const add = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') return null;
  return x + y
};

module.exports = {
  hello,
  add,
}