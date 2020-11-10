import { fireEvent, render, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('teste da aplicação toda', () => {
  it('verifica se, após a renderização, aparece a página inicial', () => {
    const { getByText } = renderWithRouter(<App />);

    const home = getByText('Você está na página Início');
    expect(home).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);

    fireEvent.click(getByText(/Sobre/i));
    // const pathname = history.location.pathname;
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do NoMatch', () => {
    const { getByText, history } = renderWithRouter(<App />);

    history.push('/pagina/pagina-que-nao-existe');
    const NoMatch = getByText(/Página não encontrada/i);
    expect(NoMatch).toBeInTheDocument();
  });

  it('deve renderizar o componente About', () => {
    const { getByText } = renderWithRouter(<About />);
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
  });
});
