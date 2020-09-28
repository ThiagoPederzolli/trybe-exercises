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

totalStudents(allLessons);