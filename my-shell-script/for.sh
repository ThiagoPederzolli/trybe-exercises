#!/bin/bash

 
for ITEM in $(cat shellscript.txt) # lê o arquivo shell script e separa por partes dentro da variável ITEM
do #Para cada parte dentro do ITEM
    echo $ITEM #printa o conteúdo
    sleep 1 #Faz uma pausa de 1 segundo
done