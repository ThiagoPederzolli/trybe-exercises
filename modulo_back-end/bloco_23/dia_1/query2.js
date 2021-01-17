// Exercício 2 : Retorne o documento com _id igual a 8, mas só exiba os campos: _id e name .
```
db.bios.find({ _id: 8}, {name: 1})
```