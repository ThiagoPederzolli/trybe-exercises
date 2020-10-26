// const paraFixar1 = require('./paraFixar1');
let randomNumber = () => Math.floor(Math.random() * 100);// Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0

describe('IsDivisible', () => {
  beforeEach(() => {
    randomNumber = jest.fn().mockReturnValueOnce(4).mockReturnValueOnce(8).mockReturnValue(15);
  });
//Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible().
  it('calls randomNumber', () => {
    isDivisible();
    expect(randomNumber).toHaveBeenCalled(); 
  });
//Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true.
  it('should return true if randomNumber returns a number pair and the arg of IsDivisible is 2', () => {
    const pairNumber = isDivisible(2);
    expect(pairNumber).toBeTruthy();
  });
//Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.
  it('should return true if randomNumber returns number divisible for 5', () => {
    const firstNumber = isDivisible(5);
    const secondNumber = isDivisible(5);
    const thirdNumber = isDivisible(5);
    const fourthNumber = isDivisible(5);
    expect(firstNumber).toBeFalsy();
    expect(secondNumber).toBeFalsy();
    expect(thirdNumber).toBeTruthy();
    expect(fourthNumber).toBeTruthy();
  });

})
