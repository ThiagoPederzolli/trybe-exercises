const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('A função myRemoveWithoutCopy', () => {
  it('Deve retornar um array sem conter o elemento declarado no segundo argumento', () => {
    const arg = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arg, 3)).not.toContain(3);
  });
  it('Deve ter o retorno diferente do array passado como argumento', () => {
    const arg = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arg, 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('O array passado por argumento deve permanecer o mesmo', () => {
    const arg = [1, 2, 3, 4];    
    expect(myRemoveWithoutCopy(arg, 3)).toEqual([1, 2, 4]);
  });
  it('Deve retornar o mesmo array caso o elemento declarado no segundo argumento não pertença ao array', () => {
    const arg = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(arg, 5)).toEqual(arg);
  });
})