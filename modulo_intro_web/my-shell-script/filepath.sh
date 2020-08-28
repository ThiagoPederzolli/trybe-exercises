#!/bin/bash
FILEPATH="/home/thiago-troll/Documents/unix_tests/countries.txt"
if [ $FILEPATH ] #verifica se o caminho é verdadeiro
then #se for verdadeiro, retorna.
echo "O caminho até $FILEPATH está habilitado"
fi

if [ -w $FILEPATH ] #Verifica se o autor tem permissão de write no arquivo.
then #se a permissão existe.
echo "Você tem permissão para editar o $FILEPATH"
else #se a permissão não existe.
echo "Você NÃO foi autorizado a editar o $FILEPATH"
fi