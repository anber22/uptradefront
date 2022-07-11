#!/bin/bash


corepack enable

pnpm -v
pnpm install --frozen-lockfile --prefer-offline
rm -rf build.tar.gz
rm -rf cache.json
tar --exclude=build.tar.gz  --exclude=.git --warning=no-file-changed -zcvf build.tar.gz ./
echo 'success'
