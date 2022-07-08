#!/bin/sh
echo "start typescript 🤔"
ts-node test.ts > ts.log
echo "ended typescript 🍭"
echo "waiting for 5s 😄"
sleep 5
echo "start javascript 🤔"
node test.js > js.log
echo "ended javascript 🥰"