let stringDeterminada = 'Tryber x aqui!'
// const trocarTexto = text => stringDeterminada.replace('x', text);

// console.log(trocarTexto('Bebeto'));
const skills = ['js', 'html', 'css', 'comunicação', 'escrita'];
function criarTexto(nome) {
  const trocarTexto = texto => stringDeterminada.replace('x', texto);
  const skillsEmOrdem = skills.sort()  
  let textoFinal = `${trocarTexto(nome)} Minhas cinco principais habilidades são:`

  skillsEmOrdem.forEach((skill) =>
  textoFinal = `${textoFinal}
  🚀 ${skill} `)

  textoFinal = `${textoFinal}
  #goTrybe`;

  return textoFinal;
}

console.log(criarTexto('Thiago Pederzolli'));