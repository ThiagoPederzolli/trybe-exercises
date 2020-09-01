let n = 5;
//armazenar resultado
let primo = 0;

//loop que vai do zero ao número definido
for(i = 2; i < n && primo !== 1; i += 1){
  //checagem  
  if(n % i == 0){
    primo += 1;
  }   
}
//informar se a variável é primo ou não
if(primo === 0){
  console.log( `${n} é primo`);
} else {
  console.log(`${n} não é primo`);
}