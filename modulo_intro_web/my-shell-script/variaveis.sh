#!/bin/bash

#função criada para compreender como usuário colocar valor em uma variável.
 #read é o comando que permite ao usuário adiionar informação na tela, lê o input do usuário e adiciona o valor à variável.
echo "Qual seu nome?"
read NOME
echo "Qual sua idade?"
read IDADE 
echo "Olá " $NOME " sua idade é " $IDADE "e você está logado com o user " $USER " e você está no diretório `pwd`"