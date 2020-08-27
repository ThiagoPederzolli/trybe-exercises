#!/bin/bash
#Shell Script criado para entender a estrutura do For(estrutura de repetição).
clear #limpa o terminal caso tenha alguma mensagem.
echo " >>> HACK A NEWS - Hack the Planet<<<"
echo "           Minhas Habilidades!!!"
for TECNICA in hadouken leigan kamehameha 'Final Flash'; #Joga uma palavra por vez dentro de TECNICA.
do #Com cada item dentro de TECNICA por vez, até ter passado por todos itens, executa.
    echo "Eu sei dar " $TECNICA #Imprime na tela, "Eu sei dar " seguido do item armazenado em TECNICA no atual loop.
    sleep 1 #Da um intervalo de 1 segundo antes de encerrar o ciclo atual do loop.
done