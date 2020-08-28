let v = [5 ,3, 2, 4, 7, 1, 0, 6];

// sabemos que irá repetir o vetor n - 1, então com 8 números, irá repetir 7x.

/*
repetição de iteração:

(5 3) 2 4 7 1 0 6 pegamos o primeiro par
 3-5  2 4 7 1 0 6 trocamos

 3(5 2) 4 7 1 0 6 pegamos o próximo par
 3 2 5  4 7 1 0 6 trocamos

 3 2(5 4) 7 1 0 6 pegamos o próximo par
 3 2 4 5  7 1 0 6 trocamos

 3 2 4 (5 7)1 0 6 pegamos o próximo par
 3 2 4  5 7 1 0 6 mantemos <-----------

 3 2 4 5 (7 1)0 6 pegamos o próximo par
 3 2 4 5  1 7 0 6 trocamos

 3 2 4 5 1 (7 0)6 pegamos o próximo par
 3 2 4 5 1  0 7 6 trocamos

 3 2 4 5 1 0 (7 6)pegamos o último par
 3 2 4 5 1 0  6 7 trocamos
*/
for (let i = 1; i < v.length; i++) {
  for (let j = 0; j < i; j++) {
    if (v[i] < v[j]) {
      let position = v[i];

      v[i] = v[j];
      v[j] = position;
    }
  }
}
console.log(v);