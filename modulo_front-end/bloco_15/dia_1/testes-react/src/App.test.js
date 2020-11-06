import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email', () => {
  it('verifica que há um input tipo email na tela', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');

    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('verifica que há botões', () => {
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');

    expect(button.length).toBe(2);
  });

  it('verifica que há um botão chamado rnviar', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');

    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
  });

  it('Verifica que, ao inserir um email e clicar em "Enviar", o email aparece na tela', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');

    fireEvent.change(emailInput, { target: { value: 'thiago@email.com' } });
    fireEvent.click(sendButton);

    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe('Valor: thiago@email.com');
  });
});
