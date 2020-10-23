const createRandomNumber = () => {
  const numbersArray = Array.from(
      { length: 10 },
      () => Math.pow(Math.floor(Math.random() * 50) + 1, 2)
  );
  let total = numbersArray.reduce((result, atual) => result + atual, 0);
  if (total > 8000) throw new Error();
  return total  
}


const createArrayFromDivision = (total) => [2, 3,5,10].map((divisor) => total / divisor);

const funcPromise = async () => {
  try {
    const total = await createRandomNumber();
    const array = await createArrayFromDivision(total);

    console.log(array);
  } catch(error) {
    console.log("É mais de oito mil!! Essa promise deve estar quebrada!");
  }
}

funcPromise();