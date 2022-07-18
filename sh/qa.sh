#!/bin/bash

corepack enable
ls -a .next
rm -rf build.tar.gz
rm cache.json

ls
pnpm -v
pnpm install
pnpm run build
ls -a .next

rm -rf node_modules

rm -rf build.tar.gz
tar --exclude=build.tar.gz  --exclude=.git --warning=no-file-changed -zcvf build.tar.gz ./
echo 'success'
