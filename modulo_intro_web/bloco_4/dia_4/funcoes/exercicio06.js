function sumAll(n){
  let sum = 0;
  for(i = 0; i < n; i += 1){
    sum += i;
  }
  return sum + n;
}
console.log(sumAll(7));