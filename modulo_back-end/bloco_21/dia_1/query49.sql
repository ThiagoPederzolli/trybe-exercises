
Write a query to display the first word from those job titles which contains more than one words.
```
SELECT job_title, SUBSTR(job_title,1, INSTR(job_title, ' ')-1)
FROM jobs;
```