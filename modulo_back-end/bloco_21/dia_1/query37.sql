Write a query to get the average salary for all departments employing more than 10 employees.
```
SELECT department_id, AVG(salary)
FROM hr.employees
GROUP BY department_id
HAVING COUNT(department_id) > 10;
```