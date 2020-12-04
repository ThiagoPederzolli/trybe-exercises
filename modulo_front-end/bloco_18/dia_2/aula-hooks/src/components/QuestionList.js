import React, { useContext } from 'react';
import QuestionsContext from '../context/QuestionsContext';
import QuestionCard from './QuestionCard';

function QuestionList() {
  const { questions } = useContext(QuestionsContext);
  return (
    <div>
      {questions.map(question => (
        <QuestionCard question={question} />
      ))}
    </div>
  );
}

export default QuestionList;
