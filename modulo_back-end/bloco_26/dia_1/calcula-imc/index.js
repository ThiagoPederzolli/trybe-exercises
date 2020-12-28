// const readline = require('readline-sync');

// function calculaIMC(peso, altura) {
//   const imc = peso / (altura * altura);
//   return imc.toFixed(2);
// }

// function executaScript() {
//   const peso = readline.questionFloat('Digite seu peso em kg: ');
//   const altura = readline.questionFloat('Digite sua altura em metros: ');
//   const imc = calculaIMC(peso, altura);

//   if (imc < 18.5) {
//     console.log('Abaixo do peso');
//     return;
//   }
  
//   if (imc >= 18.5 && imc <= 24.9) {
//     console.log('Peso normal');
//     return;
//   }
  
//   if (imc >= 25 && imc <= 29.9) {
//     console.log('Acima do Peso (sobrepeso)');
//     return;
//   }      

//   if (imc >= 30 && imc <= 34.9) {
//     console.log('Obesidade grau I');
//     return;
//   }

//   if (imc >= 35 && imc <= 39.9) {
//     console.log('Obesidade grau II');
//     return;
//   }

//   if (imc >= 40) {
//     console.log('Obesidade graus III e IV');
//     return;
//   }
// }

// executaScript();

const inquirer = require('inquirer');

inquirer.prompt([
  {
    name: "peso",
    type: "number",
    message: "Insira seu peso em kg",
    validate: (input) => {
      if (input < 0 || typeof input !== "number") {
        console.log('Você precisa prover um número positivo');
        return;
      }
      return true;    
  }
  },
  {
    name: "altura",
    type: "number",
    message: "Insira sua altura em metros",
    validate: (input) => {
        if (input < 0 || typeof input !== "number") {
          console.log('Você precisa prover um número positivo');
          return;
        }
        return true;    
    }
  }
]).then(answers => {
  console.log('Seu peso é = %s. Sua altura é = %s.', answers.peso.toFixed(2), answers.altura.toFixed(2));
});
