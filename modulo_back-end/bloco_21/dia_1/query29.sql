Write a query to get the highest, lowest, sum, and average salary of all employees.
```
SELECT
	MAX(salary) AS `Salário Máximo`,
    MIN(salary) AS `Salário Mínimo`,
    SUM(salary) AS `Soma dos salários`,
    AVG(salary) AS `Média dos salários`
FROM hr.employees;
```