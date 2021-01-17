Usando o CASE na tabela sakila.film , exiba o título , a classificação indicativa ( rating ) e uma coluna extra que vamos chamar de 'público-alvo' , em que classificaremos o filme de acordo com as seguintes siglas:
	- G: "Livre para todos";
	- PG: "Não recomendado para menores de 10 anos";
	- PG-13: "Não recomendado para menores de 13 anos";
	- R: "Não recomendado para menores de 17 anos";
	- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".
```
SELECT 
	film_id,
    rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
	END AS `público-alvo`
FROM sakila.film;
```