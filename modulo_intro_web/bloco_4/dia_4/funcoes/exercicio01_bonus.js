function romeNumbers(number) {
  let romeNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let naturalNumbers = [];
  let naturalNumber = 0;

  for (let indice in number) {
    naturalNumbers[indice] = romeNumber[number[indice]];
  }
  //    //return naturalNumbers;
  for(i = 0; i < naturalNumbers.length; i += 1) {
    if (naturalNumbers[i] < naturalNumbers[i + 1]) {
      naturalNumbers[i + 1] -= naturalNumbers[i];
    } else {
      naturalNumber += naturalNumbers[i];
    }
  }
  return naturalNumber;
}

console.log(romeNumbers('VI'));


