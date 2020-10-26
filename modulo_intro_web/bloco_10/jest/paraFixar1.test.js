// const paraFixar1 = require('./paraFixar1');
let randomNumber = () => Math.floor(Math.random() * 100);// Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0

it('randomNumber é chamada', () => {
  randomNumber = jest.fn().mockReturnValue(4);
  isDivisible(2);
  expect(randomNumber).toHaveBeenCalled();

})