const exec = require('child_process').exec;
let res;
exec('ping -c 4 114.114.114.114', (error, stdout, stderr) => {
  res = stdout;
  console.log(res);
});