#!/bin/bash

# remove old build/public dir
rm -rf public

# rebuild public dir
hugo

# cd into correct dir
cd public

# run now to deploy, capturing output
deployOutput="$(now)"

# match against output to get deploy id
deployId=`expr "$deployOutput" : '.*\/\/\(.*sh\)'`

#run alias command against deploy id and domain
now alias set $deployId loveisaction.us
now alias set $deployId www.loveisaction.us

# PROFIT
