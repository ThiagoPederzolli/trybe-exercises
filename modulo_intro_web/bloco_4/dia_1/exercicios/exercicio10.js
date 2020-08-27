// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda desccontado o custo do produto) a empresa terá ao vender mil desses produtos.
// valorCustoTotal = valorCusto + impostoSobreOCusto
//lucro = valorVenda - valorCustoTotal (lucro de um produto)


let custoProduto = 10;
let valorVenda = 18;
// Atente que, sobre o custo do produto, incide um imposto de 20%.
let custoComTaxa = (custoProduto * 0.2) + custoProduto; // 0.2 equivale aos 20%.

if (custoProduto > 0 && valorVenda >0){
  // O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
  let total = ((valorVenda - custoComTaxa) * 1000);
  console.log('Valor do lucro é: ' + total)  
}else{
  // Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
  console.log('Valores inválidos')
}

// console.log((valorVenda - custoProduto) * 1000);
