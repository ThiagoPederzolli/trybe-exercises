
 Write a query to get the number of employees with the same job:
```
SELECT job_id, COUNT(*)
FROM hr.employees
GROUP BY job_id;
```