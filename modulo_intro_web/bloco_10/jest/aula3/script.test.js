function randomDice(sides) {
  if (sides === 6) {
    logDice();
    return 6;
  } else {
    const rng = Math.random();
    return Math.round(rng * sides);
  }
}

function logDice() {
  console.log('caiu no dado viciado! AHAHHAHAHA');
}

describe('When I call LogDice', () => {
  beforeEach(() => {
    logDice = jest.fn();
  });

  it('Rolling a d6', () => {
    randomDice(6);
    expect(logDice).toHaveBeenCalledTimes(1);
  });
  it('Rolling a d20', () => {
    randomDice(20);
    expect(logDice).not.toHaveBeenCalled();
   })
})

describe('When I call randomDice', () => {
  it('should call function', () => {
    randomDice = jest.fn().mockReturnValue(10);
    const value = randomDice();
    expect(randomDice).toHaveBeenCalled();
    expect(value).toBe(10);
  });
});