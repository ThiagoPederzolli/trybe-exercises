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

const expected_result = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu'
]
// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks() {
  // escreva seu código aqui
  // let olderBooks;
  // let nameBooks;
  const data = new Date();
  const ano = data.getUTCFullYear()
  // console.log(ano);
  const olderBooks = books.filter(year => (ano - year.releaseYear) >= 60);
  olderBooks.sort((a,b) => b.releaseYear - a.releaseYear);
  const nameBooks = olderBooks.map((title) => title.name);
  // nameBooks.sort((a, b) => b.length - a.length);
  // console.log(nameBooks);
  return nameBooks;
}

// oldBooks()

assert.deepStrictEqual(oldBooks(), expected_result);