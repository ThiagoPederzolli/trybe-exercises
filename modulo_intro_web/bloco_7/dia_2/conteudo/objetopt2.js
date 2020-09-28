const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  // const arrayOfSkills = Object.keys(student);
  for(i in student){
    console.log(`${i},`);
  }
};

// console.log('Estudante 1');
console.log(listSkills(student1));

// console.log('Estudante 2');
// listSkills(student2);

console.log(Object.keys(student1));