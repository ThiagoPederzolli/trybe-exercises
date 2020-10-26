const rectangleArea = require('./rectangle-area');

// testar se  a saída é positiva

describe('A função rectangleArea', () => {
  it('Deve ser do tipo function', () => {
    expect(typeof rectangleArea).toMatch('function');
  });
  it('Deve retornar null ao receber um argumento que não seja número', () => {
    expect(rectangleArea(10, '11')).toBeNull();
    expect(rectangleArea(10, {})).toBeNull();
    expect(rectangleArea([], 11)).toBeNull();
  });
  it('Deve retornar null ao receber número negativo ou 0', () => {
    expect(rectangleArea(10, 0)).toBeNull();
    expect(rectangleArea(10, -3)).toBeNull();
  });
  it('Deve retornar 100 ao receber 10 de base e 10 de altura', () => {
    expect(rectangleArea(10, 10)).toBe(100);
  })
})
