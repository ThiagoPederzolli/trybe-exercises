#!/bin/bash

if [ ! -d $1  ]
then
    echo "O argumento $1 não é um diretório"
else
    echo "O $1 tem `ls $1 | wc -l` arquivos"
fi