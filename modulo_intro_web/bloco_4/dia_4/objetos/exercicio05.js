let info = [
  {
    personagem: 'Margarida',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178'",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  },
  {
    personagem: 'Pato Donald',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }
]
let recorrentes = '';
if(info[0].recorrente == 'Sim' && info[1].recorrente == 'Sim'){
  recorrentes = 'Ambos recorrentes';
}
console.log(`${info[0].personagem} e ${info[1].personagem}
${info[0].origem} e ${info[1].origem}
${info[0].nota} e ${info[1].nota}
${recorrentes}`);