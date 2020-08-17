#!/bin/bash
FILEPATH="/home/thiago-troll/Documents/unix_tests/countries.txt"
if [ $FILEPATH ]
then
echo "O caminho até $FILEPATH está habilitado"
fi
#verificando 
if [ -w $FILEPATH ]
then
echo "Você tem permissão para editar o $FILEPATH"
else
echo "Você NÃO foi autorizado a editar o $FILEPATH"
fi