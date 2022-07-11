#!/bin/bash

BUILD=$1
APP_WORKSPACE="$(pwd)"

echo "APP_WORKSPACE: ${APP_WORKSPACE}, BUILD: ${BUILD}"

/home/ec2-user/node-v8.11.4-linux-x64/bin/npm -v
/home/ec2-user/node-v8.11.4-linux-x64/bin/npm install
/home/ec2-user/node-v8.11.4-linux-x64/bin/npm run build

rm -rf build.tar.gz
rm -rf cache.json
tar --exclude=build.tar.gz  --exclude=.git --warning=no-file-changed -zcvf build.tar.gz ./
echo 'success'
