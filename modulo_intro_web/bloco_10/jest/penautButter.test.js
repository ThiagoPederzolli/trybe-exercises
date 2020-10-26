// function fetchData(callback) {
//   setTimeout(() => {
//     callback('peanut butter');
//   }, 100);
// }

function fetchDataPromise(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 100);
  })
}

function fetchDataPromiseWithErrorMessage(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 100);
  })
}

// // Don't do this!
// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//   }

//   fetchData(callback);
// });

// test('the data is peanut butter', done => {
//   function callback(data) {
//     expect(data).toBe('peanut butter');
//     // done();
//   }

//   fetchData(callback);
// });

// test('the data is peanut butter', () => {
//   return fetchDataPromise().then(data => {
//     expect(data).toBe('peanut butter');
//   });
// });

// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return fetchDataPromiseWithErrorMessage().catch(e =>
//     expect(e).toMatch('error')
//   );
// });

// test('the data is peanut butter', () => {
//   expect.assertions(1);
//   return expect(fetchDataPromise()).resolves.toBe('peanut butter');
// });

// test('the fetch fails with an error', () => {
//   expect.assertions(1);
//   return expect(fetchDataPromiseWithErrorMessage()).rejects.toMatch('error');
// });

test('the data is peanut butter', async () => {
  expect.assertions(1);
  const data = await fetchDataPromise();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchDataPromiseWithErrorMessage();
  } catch (e) {
    expect(e).toMatch('error');
  }
});