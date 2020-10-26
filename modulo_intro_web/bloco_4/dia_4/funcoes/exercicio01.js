function palindromo(palavra){
  let palindromo = "";
  for(i = palavra.length - 1; i >= 0; i -= 1) {
    palindromo += palavra[i]
  }
  
  if (palavra == palindromo) {
    return "SIM, SOU UM PALÍNDROMO"
  } else {
    return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
  }
}
let retornado = palindromo('batata');

console.log(retornado);