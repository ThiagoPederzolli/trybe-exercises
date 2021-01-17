Write a query to list the number of jobs available in the employees table
```
SELECT COUNT(DISTINCT job_id)
FROM hr.employees;
```