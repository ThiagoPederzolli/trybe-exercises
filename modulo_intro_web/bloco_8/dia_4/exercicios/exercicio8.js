// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const assert = require('assert')

// escreva greet abaixo
function greet(name, greets = 'Hi') {
  return `${greets} ${name}`;
}

assert.strictEqual(greet("John"), "Hi John")
assert.strictEqual(greet("John", "Good morning"), "Good morning John")
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela")