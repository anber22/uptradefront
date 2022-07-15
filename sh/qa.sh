#!/bin/bash

corepack enable
ls 
rm -rf build.tar.gz
rm cache.json

pnpm -v
pnpm install --frozen-lockfile --prefer-offline
pnpm run build

rm -rf node_modules
rm -rf build.tar.gz
tar --exclude=build.tar.gz  --exclude=.git --warning=no-file-changed -zcvf build.tar.gz ./
echo 'success'
