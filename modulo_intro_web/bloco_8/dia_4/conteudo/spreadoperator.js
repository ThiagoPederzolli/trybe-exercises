const arr = [0,1,2]
const newArr = [3, 4, 5,...arr];
const string = 'texto para ser espalhado';
const spreadString = [...string]

console.log(spreadString);


function soma(a, b, c) {
  return a+b+c
}

console.log(soma(...newArr));