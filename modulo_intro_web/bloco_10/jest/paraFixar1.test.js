// const paraFixar1 = require('./paraFixar1');
const randomNumber = () => Math.floor(Math.random() * 100);// Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0

it('randomNumber é chamada', () => {
  const randomNumber = jest.fn().mockReturnValue(4);
  return expect(randomNumber).toHaveBeenCalled();
})