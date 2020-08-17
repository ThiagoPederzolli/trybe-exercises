#!/bin/bash

echo "Criando um arquivo"
touch hacking-a-news.txt

echo "escrevendo neste arquivo"
echo "texto teste" > hacking-a-news.txt

echo "criando um diretório"
mkdir pasta-hack-a-news

echo "copiando o arquivo"
cp hacking-a-news.txt pasta-hack-a-news

echo "indo para o novo diretório"
cd ~/Documents/unix_tests/pasta-hack-a-news

echo "verificando copia"
ls

echo "verificando conteúdo"
cat hacking-a-news.txt