// 1. Calcule o valor absoluto do lucro total de cada produto.
```
db.products.aggregate([
  {
    $project: {
      profit: {
        $abs: {
          $subtract: [
            {$add: ["$purchase_price", "$taxes"]},
            "$sale_price"
          ]
        }
      }
    }
  }
])
```