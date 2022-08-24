#!/usr/bin/env node
const url = new URL('http://www.baidu.com:8089/s?wd=万绮雯&rsv_spt=1&rsv_iqid=0x8d713733000c0d39&issp=1&f=3&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_dl=ts_0&rsv_sug3=4&rsv_sug1=2&rsv_sug7=100&rsv_sug2=1&rsv_btype=i&prefixsug=wqw&rsp=0&inputT=1615&rsv_sug4=3611')
console.log(url.hash);
console.log(url.host);
console.log(url.hostname);
console.log(url.pathname);
console.log(url.port);
console.log(url.protocol);
console.log(url.search);
console.log(url.searchParams);
