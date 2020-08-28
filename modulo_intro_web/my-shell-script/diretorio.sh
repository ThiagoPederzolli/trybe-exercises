#!/bin/bash

if [ ! -d $1  ] #verifica se o parâmetro não é um diretório.
then #se não for um diretório
    echo "O argumento $1 não é um diretório"
else #se for um diretório, retornará
    echo "O $1 tem `ls $1 | wc -l` arquivos"
fi