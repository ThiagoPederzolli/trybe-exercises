function randomNumber(){
  return Math.floor(Math.random() * 100)
};

it('randomNumber test', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  expect(randomNumber()).toBe(10)
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
})

it('randomNumber modified function tests',() => {
  randomNumber = jest.fn().mockImplementationOnce((n1, n2) => n1 / n2);
  expect(randomNumber(8, 2)).toBe(4);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(8,2);
});

it('randomNumber modified and reseted function tests', () => {
  randomNumber = jest.fn().mockImplementation((n1, n2, n3) => n1*n2*n3);
  expect(randomNumber(4, 2, 4)).toBe(32);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(4,2, 4);

  randomNumber.mockReset();
  randomNumber = jest.fn().mockImplementation((n1) => n1*2);
  expect(randomNumber(4)).toBe(8);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(4);
})