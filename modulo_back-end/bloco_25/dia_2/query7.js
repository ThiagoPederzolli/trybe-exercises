// 2. Calcule qual será o lucro total de cada produto caso todo o estoque seja vendido.
```
db.products.aggregate([
  {
    $project: {
      totalProfit: {
        $multiply: [
          {$subtract: [
            "$sale_price",
            {$add: ["$purchase_price", "$taxes"]}
          ]},
          "$quantity"
        ]
      }
    }}
])
```