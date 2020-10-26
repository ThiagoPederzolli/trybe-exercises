const pokeTips = () => {
  return 'Bulbasaur é o melhor pokemon para começar.';
}

const pokeTipsCallback = (callback) => {
  setTimeout(() => {
    callback('Bulbasaur é o melhor pokemon para começar.');
  }, 500);
}

const pokeTipsPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Bulbasaur é o melhor pokemon para começar.');
    }, 1000);
  });
}

test('poketips returns the string we expect', () => {
  expect(pokeTips()).toMatch('Bulbasaur é o melhor pokemon para começar.');
});

test('pokeTipsCallback returns the string we expect', (done) => {
  pokeTipsCallback((tip) => {
    expect(tip).toMatch('Bulbasaur é o melhor pokemon para começar.');
    done();
  });
});

// test('poketips returns the string we expect', () => {
//   expect.assertations(1)
//   return pokeTipsPromise().then((tip) => {
//     expect(tip).toMatch('Bulbasaur é o melhor pokemon para começar.');
//   });
// });

test('pokeTipsPromise using a promise matcher returns the string we expect', () => {
  return expect(pokeTipsPromise()).resolves.toMatch('Bulbasaur é o melhor pokemon para começar.');  
});