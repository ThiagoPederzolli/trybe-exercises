Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE ClientIsActive(
	IN client_email VARCHAR(100),
    OUT isActive BOOL
)
BEGIN
	SET isActive = (
		SELECT active
        FROM sakila.customer
        WHERE email = client_email
	);
END $$

DELIMITER ;

SELECT @clientStatus;
CALL ClientIsActive('SANDRA.MARTIN@sakilacustomer.org', @clientStatus);
SELECT @clientStatus;
```