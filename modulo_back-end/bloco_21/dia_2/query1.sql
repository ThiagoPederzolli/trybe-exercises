Quero trazer language_id, nome da language e o title do filme em sakila.film:
```
SELECT f.title, f.language_id, l.name
FROM sakila.film AS f
JOIN sakila.language AS l
ON f.language_id = l.language_id;
```