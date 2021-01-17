 Write a query to get the department ID and the total salary payable in each department
```
SELECT department_id, SUM(salary)
FROM hr.employees
GROUP BY department_id;
```