#!/bin/bash
echo " >>> HACK A NEWS - Hack the Planet<<<"
echo "           Teste PING em sites"
for SITE in $(cat lista.txt); #pega os sites dentro do arquivo lista.txt.
do #para cada site por vez.
    echo "Pingando site " $SITE #imprime na tela especificando qual o site da vez.
    ping -w1 -c1 $SITE #realiza um teste de ping para o site.
    sleep 1 #aguarda 1 segundo antes de encerrar o ciclo do loop.
done