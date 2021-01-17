Write a query to get the average salary and number of employees working the department 90.
```
SELECT AVG(salary), COUNT(*)
FROM hr.employees
WHERE department_id = 90;
```