// import { render, screen } from '@testing-library/react';
// import App from './App';
// // import MutationObserver from 'mutationobserver-shim';

// test('Verifica que, quando recebo uma piada, mostro ela na tela', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards... are remarkable',
//     status: 200,
//   };

//   // const response = { json: jest.fn().mockResolvedValue(joke)}

//   global.fetch = jest.fn().mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });

//   const { findByText } = render(<App />);
//   await findByText('Whiteboards... are remarkable');
// });

// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());
it('fetch joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });
  const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
});
