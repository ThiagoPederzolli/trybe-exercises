const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyNotes = (studentNotes) => {
  return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

console.log(verifyNotes(notes));