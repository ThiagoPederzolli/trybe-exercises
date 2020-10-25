const myFizzBuzz = require('./myFizzBuzz');

describe('A função myFizzBuzz', () => {
  it('Deve retornar "fizzbuzz" se for passado um valor divisível por 3 ou 5', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });
  it('Deve retornar "fizz" se for passado um valor divisível por 3', () => {
    expect(myFizzBuzz(12)).toMatch('fizz');
  });
  it('Deve retornar "buzz" se for passado um valor disivível por 5', () => {
    expect(myFizzBuzz(25)).toMatch('buzz');
  });
  it('Deve retornar o valor do próprio argumento caso não seja divisível por 3 ou 5', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  it('Deve retornar false caso o argumento não seja um número', () => {
    expect(myFizzBuzz('15')).toBeFalsy();
  });  
});