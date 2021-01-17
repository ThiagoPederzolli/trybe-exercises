// 2. Retorne o maior número inteiro relativo ao lucro total sobre cada produto.
```
db.products.aggregate([
  {$project: {HighestPrice: {$ceil: "$sale_price"}}}
])
```