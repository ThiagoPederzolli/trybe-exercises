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
  grau: 'médio'
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

// console.log(objectLength(lesson3));

const showValues = key => Object.values(key);

// console.log(showValues(lesson5));

const allLessons = Object.assign({}, {lesson1, lesson2 , lesson3});

// console.log(allLessons);

function totalStudents(objeto) {
  const keysObject = Object.keys(objeto);
  let totalStudent = 0;
  for (let i = 0; i < keysObject.length; i += 1) {
    totalStudent += objeto[keysObject[i]].numeroEstudantes;
  }
  console.log(totalStudent);
}

// totalStudents(allLessons);

// const GetValue = (objeto, valor) => {
//   const keysObject = Object.keys(objeto);
//   const valueByNumber = objeto[keysObject[valor]];
//   console.log(valueByNumber);
// }

const GetValue = (objeto, valor) => Object.values(objeto)[valor]
// GetValue(lesson3, 2);
// console.log(GetValue(lesson1, 0));

function verify(objeto, chave, valor) {
  const pair = Object.entries(objeto);
  let pairExists = 'Não existe';
  for (let i = 0; i < pair.length; i += 1) {
    if (pair[i][0] === chave && pair[i][1] === valor) pairExists = 'Existe';
  }
  console.log(pairExists)
}

// verify(lesson3, 'turno', 'noite');
// Output: true,
// verify(lesson3, 'materia', 'Maria Clara');
// Output: false

function mathStudents(objeto) {
  const keysObject = Object.keys(objeto);
  let totalStudent = 0;
  for (let i = 0; i < keysObject.length; i += 1) {
    if (objeto[keysObject[i]].materia === 'Matemática') totalStudent += objeto[keysObject[i]].numeroEstudantes;
  }
  console.log(totalStudent);
}

mathStudents(allLessons);