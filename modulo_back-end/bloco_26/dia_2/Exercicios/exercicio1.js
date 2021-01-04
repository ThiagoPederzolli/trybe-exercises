function calculadora(a, b, c) {
  return new Promise((resolve, reject) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      console.log('Digite apenas números')
      reject(new Error('Digite apenas números'));
    }
    resolve(a+b);
  })
  .then(result => {
    const multi = result * c;
    if (multi < 50) {
      console.log('Valor muito baixo')
      return Promise.reject(new Error('Valor muito baixo'));
    }
    console.log(multi)
    return multi;
  })
}

calculadora('3', 2, 4)