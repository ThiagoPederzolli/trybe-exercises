#!/bin/bash
echo " >>> HACK A NEWS - Hack the Planet<<<"
echo "           Teste PING em sites"
for SITE in $(cat lista.txt);
do
    echo "Pingando site " $SITE
    ping -w1 -c1 $SITE
    sleep 1
done