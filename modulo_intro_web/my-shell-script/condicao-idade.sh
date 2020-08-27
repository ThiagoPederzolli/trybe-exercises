#!/bin/bash
echo "Qual sua idade?" #informar ao usuário que ele deve informar sua idade
read IDADE #read é o comando que permite ao usuário adiionar informação na tela, lê o input do usuário e adiciona o valor à variável IDADE
if [ "$IDADE" -ge "16" ] #verifica se a idade é maior ou igual a 16
then #se o if for verdadeiro
echo "Você já pode votar!"
else #se a idade for menor que 16, retorna:
echo "Você ainda não pode votar."
fi