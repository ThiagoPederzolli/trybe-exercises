import React from 'react';
import fetchMock from 'fetch-mock-jest';
import App from '../App';
import renderWithRedux from './helpers/index';
import { fireEvent, waitFor } from '@testing-library/react';

describe('Página principal', () => {
  it('testa que o botão de procurar cachorro está presente', async () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonDoguinho = queryByText('Novo Doguinho');

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    fireEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});
