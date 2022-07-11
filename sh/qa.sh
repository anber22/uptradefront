#!/bin/bash

rm -rf node_modules
rm -rf build.tar.gz
tar --exclude=build.tar.gz  --exclude=.git --warning=no-file-changed -zcvf build.tar.gz ./
echo 'success'
