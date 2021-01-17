// Exercício 17: Retorne o total de documentos que contêm o campo hairColor .
```
db.superheroes.find({"aspects.hairColor": {$exists:true}}).count()
```