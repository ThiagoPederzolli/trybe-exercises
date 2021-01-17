// Exercício 12: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.
```
db.superheroes.find({"aspects.hairColor":{$not: {$nin:['Black', 'No Hair']}}})
```