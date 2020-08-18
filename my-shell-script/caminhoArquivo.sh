#!/bin/bash
# Vou ter muito sucesso na programação
for FILE in $@ #permite que o usuário adicione quantos arquivos ou diretórios desejar como parâmetros para função.
do
    if [ -d $FILE ] #verifica se é um diretório.
    then #ação que deve ser retornada caso seja um diretório.
        echo "$FILE é um diretório" 
        ls -l $FILE
    elif [ -f $FILE ] #verifica se é um arquivo.
    then #ação que deve ser retornada caso seja um arquivo.
        echo "$FILE é um arquivo regular"
        ls -l $FILE
    else #se não for um arquivo ou diretório, retornar isso.
        echo "é um outro tipo de arquivo"
        ls -l $FILE
    fi
done