import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from './App';
import { createMemoryHistory } from 'history';

test('render my App', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>,
  );
  const personalInfo = getByText(/Página sobre mim/);
  expect(personalInfo).toBeInTheDocument();

  fireEvent.click(getByText(/Deixe um comentário/i));
  const comment = getByText(/Comente!/i);
  expect(comment).toBeInTheDocument();
});
