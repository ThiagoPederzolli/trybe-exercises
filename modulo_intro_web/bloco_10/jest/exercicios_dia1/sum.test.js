const sum = require('./sum');

describe('A função sum', () => {
  it('Deve retornar 9 se os argumentos forem 4 e 5', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Deve retornar 0 se os argumentos forem 0 e 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Deve lançar um erro caso um dos argumentos seja string', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow();
  });
  it('A mensagem do erro deve ser "parameters must be numbers"', () => {
    expect(sum).toThrowError(new Error('parameters must be numbers'));
  })
})