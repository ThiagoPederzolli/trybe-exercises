    
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// Crie uma string com os nomes de todas as pessoas autoras.

function allNames() {
  // escreva seu código aqui
  const nameAuthors = books.map((book) => book.author.name);
  const stringAuthors = nameAuthors.reduce((previous, current,) => `${previous} ${current},`, 'Nomes:');
  // const change = stringAuthors[stringAuthors.length - 1]
  const newString = stringAuthors.replace('Lovecraft,', 'Lovecraft.');
  return newString;
}
// allNames();

// Gabarito consultado por não conseguir resolver o replace da vírgula por ponto:
// const reduceNames = (acc, book, index, array) => {
//   if (index === array.length - 1) return `${acc} ${book.author.name}.`;
//   return `${acc} ${book.author.name},`;
// };

assert.strictEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");