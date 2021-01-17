// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .
```
db.vendas.aggregate([
  {$match: {dataVenda: {
    $gte: ISODate('2020-01-01'),
    $lte: ISODate('2020-03-31')
  }}},
  {
    $group: {
      _id: '$clienteId',
      comprasTotais: { $sum: 1 },
    },
  },
  { $match: { comprasTotais: { $lt: 3 } } },
  { $count: 'clientes' },
]);
```