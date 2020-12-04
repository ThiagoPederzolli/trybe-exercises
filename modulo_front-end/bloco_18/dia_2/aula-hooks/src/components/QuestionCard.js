import React from 'react';

function QuestionCard({ question }) {
  return (
    <section className="question-card">
      <header className="question-card-header">
        <img
          className="question-card-image"
          src="https://avatars.dicebear.com/api/human/test.svg?mood[]=happy"
          alt=""
        />
        {question.user}
      </header>
      <p className="question-card-body">{question.question}</p>
    </section>
  );
}

export default QuestionCard;
