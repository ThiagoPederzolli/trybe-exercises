// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.
```
db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor:{
          $divide: [
            { $subtract: ["$$NOW", "$dataNascimento"]},
            { $multiply: [86400000, 365] }
          ]
        }
      }
    }
  },
  {
    $match: {
      idade: {
        $gte: 18, $lte: 25
      }
    }
  },
  {
    $count: 'clientes18a25'
  }
]);
```