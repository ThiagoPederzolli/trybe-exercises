const paraFixar1 = require('./paraFixar1');

it('randomNumber é chamada', () => {
  paraFixar1.randomNumber = jest.fn().mockReturnValue(4);
  paraFixar1.isDivisible(2)
  expect(paraFixar1.randomNumber).toHaveBeenCalled();
})