#!/bin/bash

DAY=$(date +%F)
for ITEM in `ls *.png`
do
    mv $ITEM  ${DAY}-${ITEM}
done