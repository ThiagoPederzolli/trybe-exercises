// qual o salário bruto?
// 2000

// qual a taxa do inss?
// 1500 < 2000 < 2500
// 9% => valor x => 2000
// salario base = salario bruto - taxa inss

// qual a taxa do imposto de renda?
// 1900 < 2000 < 2000

// Qual o salario liquido?
// salario base = salario base - (7.5% - 142)

const salarioBruto = 3000;

let aliquotaINSS;

if(salarioBruto <= 1566.94){
  aliquotaINSS = salarioBruto * 0.08;
} else {
  if (salarioBruto <= 2594.92){
    aliquotaINSS = salarioBrutro * 0.09;
  } else {
    if(salarioBruto <= 5189.82){
      aliquotaINSS = salarioBruto * 0.11;
    } else{
      aliquotaINSS = 570.88;
    }
  }
}

const salarioBase = salarioBruto - aliquotaINSS;
let aliquotaIR;
if(salarioBase <= 1903.98){
  aliquotaIR = 0;
} else if(salarioBase <= 2826.64){
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if(salarioBase <= 3751.05){
  aliquotaIR = (salarioBase * 0.15) - 354.80
} else if(salarioBase <= 4664.68){
  aliquotaIR = (salarioBase * 0.22) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
}

const salarioLiquido = salarioBase - aliquotaIR;

console.log(salarioLiquido);