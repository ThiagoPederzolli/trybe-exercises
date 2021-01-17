Write a query to get the average salary for each job ID excluding programmer.
```
SELECT job_id, AVG(salary)
FROM hr.employees
WHERE job_id <> 'IT_PROG'
GROUP BY job_id;
```