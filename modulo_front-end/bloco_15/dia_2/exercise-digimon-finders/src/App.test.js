import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('test all cases', () => {
  afterEach(() => jest.clearAllMocks());
  test('renders App', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Search Digimon/i);
    const makeASearch = getByText(/Faça uma pesquisa/i);

    expect(linkElement).toBeInTheDocument();
    expect(makeASearch).toBeInTheDocument();
  });
  test('changes value input', () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId('input');
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'Agumon' } });
    expect(input).toHaveValue('Agumon');
  });
  test('searches digimon', async () => {
    const digimon = [
      {
        name: 'Agumon',
        level: 'Rookie',
        img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      },
    ];

    const fetchApi = (global.fetch = jest.fn(async () => ({
      json: async () => digimon,
    })));

    const { getByTestId, findByText, getByAltText } = render(<App />);

    const input = getByTestId('input');
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'Agumon' } });
    expect(input).toHaveValue('Agumon');

    const button = getByTestId('buttonSearch');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    await findByText('level: Rookie');
    expect(getByTestId('digimonName')).toBeInTheDocument();
    expect(getByAltText('Agumon')).toBeInTheDocument();

    expect(fetchApi).toBeCalledTimes(1);
    expect(fetchApi).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon',
    );
  });
  test('teste no results', async () => {
    const ErrorMsg = 'A is not a Digimon in our database.';

    const fetchApi = (global.fetch = jest.fn(async () => ({
      json: async () => ({ ErrorMsg }),
    })));

    const { getByTestId, findByText } = render(<App />);

    const input = getByTestId('input');
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: 'Teste' } });
    expect(input).toHaveValue('Teste');

    const button = getByTestId('buttonSearch');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    await findByText('A is not a Digimon in our database.');

    expect(fetchApi).toBeCalledTimes(1);
    expect(fetchApi).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Teste',
    );
  });
  test('teste no fetch, no name in input', async () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId('input');
    expect(input).toHaveValue('');

    fireEvent.change(input, { target: { value: '' } });
    expect(input).toHaveValue('');

    const button = getByTestId('buttonSearch');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);

    expect(global.fetch).toBeCalledTimes(0);
  });
});
