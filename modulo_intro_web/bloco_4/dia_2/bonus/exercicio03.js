let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//novo array que precisa ser criado;
let multiplos = [];
//percorrer o primeiro array
for (i = 0; i < numbers.length; i += 1){
  //confere há um item a frente
  if(numbers[i + 1]){
    //multiplica o valor atual pelo próximo
    multiplos.push(numbers[i] * numbers[i +1]);
  }else{
    //se não há item a frente, multiplica por si.. Para multiplicar o último
    multiplos.push(numbers[i] * 2);
  }
}
console.log(multiplos);





