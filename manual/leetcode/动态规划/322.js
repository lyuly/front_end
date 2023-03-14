#!/usr/bin/env node

const fs = require('fs')

fs.readFile('322.txt', 'utf8', (err, data) => {
  if (err)  throw err

  const [amount, ...coins] = data.split(' ').map(Number)

  console.log(amount)
  console.log(coins)

  const res = coinChange(coins, amount)

  console.log(res)
})

function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount]
}
