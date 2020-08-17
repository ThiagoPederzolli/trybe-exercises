#!/bin/bash
echo "Qual seu nome?"
read NOME 
echo "Qual sua idade?"
read IDADE 
echo "Olá " $NOME " sua idade é " $IDADE "e você está logado com o user " $USER " e você está no diretório `pwd`"