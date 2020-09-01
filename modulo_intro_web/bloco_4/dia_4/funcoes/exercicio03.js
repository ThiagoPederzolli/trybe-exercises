let numbers = [2, 4, 6, 7, 10, 0, -3, -10];

function higherIndice(array){
  //armazena o maior número
  let higherNumber = 0;
  //percorre todo array para identificar qual o maior número
  for(highNumber in array){
    if(higherNumber < array[highNumber]){
      higherNumber = array[highNumber];
    }
  }
  let lowerNumber = higherNumber;
  for (lowNumber in array){
    if(lowerNumber > array[lowNumber]){
      lowerNumber = array[lowNumber];
    }
  }
  //armazena a posição do maior número
  let higher = 0;
  //percorre todo array para identificar o indice do maior número
  for(indiceHigher in array){
    if(higherNumber === array[indiceHigher]){
      higher = indiceHigher;
    }
  }

  let lower = higher;
  for(indiceLower in array){
    if(lowerNumber === array[indiceLower]){
      lower = indiceLower;
    }
  }
  return lower;
}

console.log(higherIndice(numbers));