// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .
```
db.clientes.aggregate([{$match: {$and: [{sexo: "FEMININO"},{dataNascimento: { $gte: ISODate("1995-01-01"), $lte: ISODate("2005-01-01")}}]}}, {$limit: 5}]).pretty()
```