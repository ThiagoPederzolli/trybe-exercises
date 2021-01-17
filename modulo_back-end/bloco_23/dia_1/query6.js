// Exercício 6 : Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.
```
db.bios.find().skip(5).limit(2)
```