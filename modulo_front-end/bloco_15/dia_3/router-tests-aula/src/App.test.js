import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';

test('render my App', () => {
  const { getByText, history } = renderWithRouter(<App />);
  const personalInfo = getByText(/Página sobre mim/);
  expect(personalInfo).toBeInTheDocument();

  fireEvent.click(getByText(/Deixe um comentário/i));
  const { pathname } = history.location;
  expect(pathname).toBe('/comments');
  const comment = getByText(/Comente!/i);
  expect(comment).toBeInTheDocument();
});

test('Se eu acessar uma página que não existe eu vou renderizar a página de 404', () => {
  const { getByText, history } = renderWithRouter(<App />);

  const nonExistingRoute = '/pagina-que-nao-existe';
  history.push(nonExistingRoute);
  expect(getByText(/Página não encontrada/i)).toBeInTheDocument();
});
