const hello = () => 'Hello!';
const add = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') return null;
  return x + y
};

const removeSNames = names => {
  return names.filter(name =>  name.toLowerCase().charAt(0) !== 's');
  // let newNames = names;
  // names.forEach(name => {
  //   if (name.toLowerCase().charAt(0) === 's') {
  //     const index = newNames.indexOf(name);
  //     newNames.splice(index, 1);
  //   }
  // });
  // return newNames;
}

module.exports = {
  hello,
  add,
  removeSNames,
}