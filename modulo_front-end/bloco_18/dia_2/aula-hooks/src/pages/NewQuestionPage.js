import React, { useContext, useState } from 'react';
import QuestionsContext from '../context/QuestionsContext';

function NewQuestionPage({ history }) {
  const [question, setQuestion] = useState('');
  const [user, setUser] = useState('');
  const { createQuestion } = useContext(QuestionsContext);

  const handleSubmit = async ev => {
    ev.preventDefault();
    await createQuestion({ user, question, archive: false });
    history.push('/');
  };

  return (
    <section className="question-section">
      <h2>Faça uma pergunta</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="question">
          Digite a sua pergunta:
          <textarea
            onChange={({ target }) => setQuestion(target.value)}
            value={question}
            name="question"
            placeholder="Escreva aqui sua pergunta"
            id="question"
            cols="30"
            rows="10"
          />
        </label>
        <label htmlFor="user">
          Digite o seu nome:
          <input
            onChange={({ target }) => setUser(target.value)}
            value={user}
            type="text"
            name="user"
            placeholder="Maria"
            id="user"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default NewQuestionPage;
