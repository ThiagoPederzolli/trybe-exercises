const botao = document.querySelector('#botao');
const body = document.querySelector('body');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const endereco = document.querySelector('#endereco');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const moradia = document.getElementsByName('residencia');
const resumo = document.querySelector('#resumo');
const cargo = document.querySelector('#cargo');
const descricao = document.querySelector('#descricao');
const data = document.querySelector('#data');
let estadoAtual;
function populateUFs(){
  const ufSelect = document.querySelector("select[name=uf]");
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
    .then( res => res.json() )
    .then( states => {
        for( state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</otpion>`
        }           
    })
}
populateUFs();

function validarDataFormat() {
  let dataNumerica = data.value.split('/');
  let dataTotal = data.value
  if(dataTotal.length !== 10 || dataNumerica[0].length !== 2 || dataNumerica[1].length !== 2) {
    alert('data invalida');
  } 
  return dataNumerica;
}

function validarDataNumeros() {
  let dataInformada = validarDataFormat();
  let dataValida;
  let dia = Number(dataInformada[0])
  let mes = Number(dataInformada[1])
  let ano = Number(dataInformada[2])
  if(dia < 0 || dia > 31 || mes < 0 || mes > 12 || ano < 0){
    alert('Valores inválidos');
  } else {
    dataValida = `${dia}/${mes}/${ano}`
  }  
  return dataValida;
}
estado.addEventListener('click', function identificarEstado() {
  console.log(estadoAtual);
  const valorDoEstado = event.target.selectedIndex;
  estadoAtual = event.target.options[valorDoEstado].text;
  console.log(valorDoEstado);
  console.log(estadoAtual + ' definido');
  return estadoAtual;  
})

function identificarMoradia() {
  let local;
  for (let i = 0; i < moradia.length; i += 1) {
    if(moradia[i].checked) {
      local = moradia[i].value;
    }
  }  
  return local;
}

function criarCPF() {
  let cpfInformado = cpf.value;
  let cpfGerado = `${cpfInformado[0]}${cpfInformado[1]}${cpfInformado[2]}.${cpfInformado[3]}${cpfInformado[4]}${cpfInformado[5]}.${cpfInformado[6]}${cpfInformado[7]}${cpfInformado[8]}-${cpfInformado[9]}${cpfInformado[10]}`
  return cpfGerado;
}
function criarHTML() {
  let div = document.createElement('div');
  body.appendChild(div);
  for (let j = 0; j < 11; j += 1) {
    let paragrafoEmBranco = document.createElement('p');
    div.appendChild(paragrafoEmBranco);
  }
}

function adicionarTexto() {
  const paragrafo = document.querySelectorAll('p');
  paragrafo[0].innerText = nome.value;
  paragrafo[1].innerText = email.value;
  paragrafo[2].innerText = criarCPF();
  paragrafo[3].innerText = endereco.value;
  paragrafo[4].innerText = cidade.value;
  paragrafo[5].innerText = estadoAtual;
  paragrafo[6].innerText = identificarMoradia();
  paragrafo[7].innerText = resumo.value;
  paragrafo[8].innerText = cargo.value;
  paragrafo[9].innerText = descricao.value;
  paragrafo[10].innerText = validarDataNumeros();
}

function submitForm() {  
  event.preventDefault();
  criarHTML();
  adicionarTexto();
  
  
}

botao.addEventListener('click', submitForm)