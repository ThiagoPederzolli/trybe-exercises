#!/bin/bash

for FILE in $@
do
    if [ -d $FILE ]
    then
        echo "$FILE é um diretório"
        ls -l $FILE
    elif [ -f $FILE ]
    then
        echo "$FILE é um arquivo regular"
        ls -l $FILE
    else
        echo "é um outro tipo de arquivo"
        ls -l $FILE
    fi
done