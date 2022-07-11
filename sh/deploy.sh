#!/bin/bash

corepack enable

rm -rf build.tar.gz
rm -rf cache.json
pnpm -v
pnpm install --frozen-lockfile --prefer-offline
pnpm run build
# 启动 pm2
pm2 flush
pm2 stop new-uptrade
pm2 delete new-uptrade
pm2 start pnpm --name "new-uptrade" -- run start

sudo /sbin/nginx -t
sudo /sbin/nginx -s reload


NGINX_CACHE_DIR="/usr/local/nginx/data"

# look for empty dir
if [ "$(ls -A $NGINX_CACHE_DIR)" ]; then
     echo "$NGINX_CACHE_DIR 存在缓存文件，进行清理"
     sudo rm -r /usr/local/nginx/data/*
fi
# echo '清理nginx缓存文件'
# sudo rm -r /usr/local/nginx/data/*
