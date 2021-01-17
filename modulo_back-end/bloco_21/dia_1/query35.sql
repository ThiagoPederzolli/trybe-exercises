Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only.
```
SELECT job_id,
    MAX(salary) AS `Salário Máximo`,
    MIN(salary) AS `Salário Mínimo`,
    SUM(salary) AS `Soma dos salários`,
    AVG(salary) AS `Média dos salários`
FROM hr.employees
WHERE department_id = 90
GROUP BY job_id;
```