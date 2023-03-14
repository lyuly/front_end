#!/usr/bin/env node

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function lengthOfLIS(nums) { 
  const n = nums.length, dp = []

  for (let i = 0; i < n; i++) {
    if (dp.length === 0 || nums[i] > dp[dp.length - 1]) {
      dp.push(nums[i])
    } else {
      let lo = 0, hi = dp.length - 1, index = 0
      while (lo <= hi) {
        const mid = lo + ((hi - lo) >> 1)
        if (dp[mid] > nums[i]) {
          hi = mid - 1
          index = mid
        } else {
          lo = mid + 1
        }
      }
      dp[index] = nums[i]
    }
  }
  return dp.length
}

rl.on('line', (line) => {
  const nums = line.split(' ').map(Number)
  console.log(lengthOfLIS(nums))
  rl.close()
})