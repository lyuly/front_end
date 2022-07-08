#!/bin/sh
echo "typescript测试开始"
ts-node test.ts > ts_test.log
echo "typescript测试结束🍭"
echo "等待5秒😄"
sleep 5
echo "javascript测试开始🤔"
node test.js > js_test.log
echo "javascript测试结束🥰"