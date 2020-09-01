let numbers = [2, 3, 2, 5, 8, 2, 3, 3, 3, 3];

function repeatedNumber(array){
  let finalNumber = array[0];
  for(key in array){
    if(finalNumber == array[key]){
      finalNumber = array[key];
    }
  }
  return finalNumber;
}

console.log(repeatedNumber(numbers));