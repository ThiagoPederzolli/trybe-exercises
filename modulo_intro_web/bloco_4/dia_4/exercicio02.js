let numbers = [222, 3, 16, 7, 110, 1];

function higherIndice(array){
  //armazena o maior número
  let higherNumber = 0;
  //percorre todo array para identificar qual o maior número
  for(number in numbers){
    if(higherNumber < numbers[number]){
      higherNumber = numbers[number];
    }
  }
  //armazena a posição do maior número
  let higher = 0;
  //percorre todo array para identificar o indice do maior número
  for(indice in numbers){
    if(higherNumber === numbers[indice]){
      higher = indice;
    }
  }
  return higher;
}

console.log(higherIndice(numbers));