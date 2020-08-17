#!/bin/bash
echo "Qual sua idade?"
read IDADE 
if [ "$IDADE" -ge "16" ]
then
echo "Você já pode votar!"
else
echo "Você ainda não pode votar."
fi