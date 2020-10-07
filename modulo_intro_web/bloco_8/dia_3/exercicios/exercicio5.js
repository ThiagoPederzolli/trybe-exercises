    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui
  const stringNames = names.reduce((previousName, currentName) => `${previousName} ${currentName}`);
  const contador = stringNames.split('').reduce((contador, letra) => (letra === 'a' || letra === 'A') ? contador + 1 : contador, 0)
  return contador;
}
containsA()
assert.deepStrictEqual(containsA(), 20);