const math = require('./mathParaFixar');

// Faça o mock da funcão subtrair e teste sua chamada.
it('subtrair test', () => {
  math.subtrair = jest.spyOn();
  math.subtrair()
  expect(math.subtrair).toHaveBeenCalled();
});

// Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
it('multiplicar test', () => {
  math.multiplicar = jest.fn();
  math.multiplicar.mockReturnValue(10);  
  expect(math.multiplicar()).toBe(10);
});

//Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
it('somar test', () => {
  math.somar = jest.fn();
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar(1, 2)).toBe(3);
  expect(math.somar).toHaveBeenLastCalledWith(1, 2);
});

// Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
it('dividir test', () => {
  math.dividir.mockReturnValue(15);
  const dividePorDois = math.dividir(2);
  const dividePorCinco = math.dividir(5);
  expect(math.dividir).toHaveBeenCalledTimes(2);
})