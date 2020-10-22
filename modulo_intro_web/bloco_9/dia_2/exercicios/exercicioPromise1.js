const funcPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const numbersArray = Array.from(
      { length: 10 },
      () => Math.pow(Math.floor(Math.random() * 50) + 1, 2)
    );
    let total = numbersArray.reduce((result, atual) => result + atual, 0);
    (total < 8000) ? resolve(total) : reject();
  });
  promise
  .then((total) => [2, 3,5,10].map((divisor) => total / divisor))
  .then((newArray) => console.log(newArray.reduce((result, atual) => result + atual, 0)))
  .catch(() => console.log("É mais de oito mil!! Essa promise deve estar quebrada!"));
}

funcPromise();
// 6840