const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const lesson5 = {
  materia: 'Português',
  numeroEstudantes: 10,
  professor: 'Pedro',
  turno: 'noite',
};

const incrementKey = (objeto, chave, valor) => objeto[`${chave}`] = valor;

incrementKey(lesson5, 'grau', 'médio');
// console.log(lesson5);

const showKeys = key => Object.keys(key);

// console.log(showKeys(lesson3));

const objectLength = key => Object.keys(key).length;

console.log(objectLength(lesson3));