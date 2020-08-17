#!/bin/bash

for ITEM in $(cat shellscript.txt)
do
    echo $ITEM
    sleep 1
done