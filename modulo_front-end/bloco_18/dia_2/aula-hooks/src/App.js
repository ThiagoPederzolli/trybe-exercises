import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import QuestionListPage from './pages/QuestionListPage';
import NewQuestionPage from './pages/NewQuestionPage';
import * as api from './services/api';

import QuestionContext from './context/QuestionsContext';

function App() {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIloading] = useState(false);

  const getQuestions = async () => {
    setIloading(true);
    const apiResponseQuestions = await api.getQuestions();
    setQuestions(apiResponseQuestions);
    setIloading(true);
  };

  const createQuestion = async question => {
    setIloading(true);
    await api.createQuestion(question);
    setIloading(false);
  };

  return (
    <QuestionContext.Provider
      value={{ questions, isLoading, getQuestions, createQuestion }}
    >
      <main>
        <h1>Questions</h1>
        <Switch>
          <Route path="/new-question" component={NewQuestionPage} />
          <Route exact path="/" component={QuestionListPage} />
        </Switch>
      </main>
    </QuestionContext.Provider>
  );
}

export default App;
