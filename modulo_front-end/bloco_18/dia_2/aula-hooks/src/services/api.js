import data from './QuestionsData';

localStorage.setItem('questions', JSON.stringify(data));

const readQuestions = () => JSON.parse(localStorage.getItem('questions'));

const saveQuestions = questions =>
  localStorage.setItem('questions', JSON.stringify(questions));

export const getQuestions = () =>
  new Promise(resolve => {
    setTimeout(() => {
      const questions = readQuestions();
      resolve(questions);
    }, 100);
  });

export const archiveQuestion = archive => {
  const questions = readQuestions().map(question => {
    if (question.id === parseInt(question.id, 10)) {
      return { ...question, archive };
    }
    return question;
  });
  saveQuestions(questions);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve('OK');
    }, 100);
  });
};

export const createQuestion = questionData => {
  let questions = readQuestions();
  const nextId = questions[questions.length - 1].id + 1;
  const newQuestion = { ...questionData, id: nextId };
  questions = [...questions, newQuestion];
  saveQuestions(questions);

  return new Promise(resolve => {
    setTimeout(() => {
      resolve('OK');
    }, 100);
  });
};
