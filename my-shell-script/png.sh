#!/bin/bash

DAY=$(date +%F) #pega o dia atual e coloca em formato YYYY--MM--DD.
for ITEM in `ls *.png` #roda um ls na pasta atual e separa arquivos .png dentro da variável ITEM.
do #Para cada ITEM irá alterar o nome para data atual+nome anterior do arquivo.
    mv $ITEM  ${DAY}-${ITEM}
done