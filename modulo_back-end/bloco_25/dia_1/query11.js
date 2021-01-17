// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .
```
db.clientes.aggregate([{$match: { sexo: "MASCULINO"}}]).pretty()
```