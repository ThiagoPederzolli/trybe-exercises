const calculadora = async(a, b, c) => {
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      console.log('Digite apenas números')
      return Promise.reject(new Error('Digite apenas números'));
    }
    const soma = a + b;
    const multi = soma * c;
  if (multi < 50) {
    console.log('Valor muito baixo')
    return Promise.reject(new Error('Valor muito baixo'));
  }
  console.log(multi)
  return multi;  
}

calculadora(23, 2, 4)