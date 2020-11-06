import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />);
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('testes de adicionar tarefa', () => {
  it('Se há um botão "Adicionar"', () => {
    const { getByText } = render(<App />);

    const btnAdd = getByText('Adicionar');
    expect(btnAdd).toBeInTheDocument();
    expect(btnAdd.type).toBe('button');
  });
  it('Se ao botão "Adicionar" ser clicado salva a tarefa', () => {
    const { getByText, getByLabelText } = render(<App />);
    const inputTarefa = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    fireEvent.change(inputTarefa, { target: { value: 'Testando save' } });
    fireEvent.click(btnAdd);
    expect(getByText('Testando save')).toBeInTheDocument();
  });
});
describe('Testa a aplicação, e o input', () => {
  test('Testa a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    const { getByLabelText, getByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    listTodo.forEach(task => {
      fireEvent.change(inputTask, { target: { value: task } });
      fireEvent.click(btnAdd);
    });

    listTodo.forEach(task => {
      expect(getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Testa o Componente item', () => {
  test('Ao receber uma string na props ela precisa aparecer na tela.', () => {
    const { getByText } = render(<Item content="Limpar a casa" />);
    expect(getByText('Limpar a casa')).toBeInTheDocument();
  });
});
