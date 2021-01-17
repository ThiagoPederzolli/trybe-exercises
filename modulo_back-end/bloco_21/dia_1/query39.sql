Write a query to update the portion of the phone_number in the employees table, within the phone number the substring '124' will be replaced by '999'
```
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '124', '999')
WHERE phone_number LIKE '%124%';
```