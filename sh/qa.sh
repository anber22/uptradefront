#!/bin/bash

BUILD=$1
APP_WORKSPACE="$(pwd)"

echo "APP_WORKSPACE: ${APP_WORKSPACE}, BUILD: ${BUILD}"

npm -v
npm install
npm run build

rm -rf build.tar.gz
rm -rf cache.json
tar --exclude=build.tar.gz  --exclude=.git --warning=no-file-changed -zcvf build.tar.gz ./
echo 'success'
