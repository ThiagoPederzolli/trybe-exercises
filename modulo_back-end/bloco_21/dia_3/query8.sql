
Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .
```
USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER carro_atualizado
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZACAO';        
END $$
DELIMITER ;
```