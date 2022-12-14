#!/bin/bash

corepack enable
rm -rf build.tar.gz
rm cache.json
rm -rf .next

ls
pnpm -v
pnpm install
pnpm run build

if [ $? -eq 0 ]
then
  ls -a .next

  rm -rf node_modules

  rm -rf build.tar.gz
  tar --exclude=build.tar.gz  --exclude=.git --warning=no-file-changed -zcvf build.tar.gz ./
  echo 'success'
  exit 0
else
  echo "Build Failed" >&2
  exit 1
fi


