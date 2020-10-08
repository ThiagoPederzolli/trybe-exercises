const sum = (...args) => {
  let sum = 0;
  for(let number of args) {
    sum += number;
  }
  return sum;
}
