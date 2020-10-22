const myFunc = (callback) => {
  const value = 77;

  callback(value);
};

myFunc((number) => {
  console.log(number);
});