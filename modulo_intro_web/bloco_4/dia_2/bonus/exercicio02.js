let numbers = [5, 3, 9, 19, 70, 8, 100, 35, 27];

//percorrer todo vetor:
for (i = 0; i < numbers.length; i += 1){
  //dentro de cada iteração, percorrer o vetor de novo em busca de pares
  for(j = 0; j < i; j += 1){
    //comparando
    if(numbers[i] > numbers[j]){
      // trocas
      let position = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = position;      
    }
  }
}
console.log(numbers)