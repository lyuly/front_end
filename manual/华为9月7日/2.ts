#!/usr/bin/env bun

import * as fs from "fs";

const lines: string[] = fs
  .readFileSync("2.txt", "utf-8")
  .toString()
  .split(/\r\n|\r|\n/);

const [m, n] = lines[0].split(" ").map(Number);
let s: string[][] = [];

for (let i: number = 1; i < lines.length; i++) {
  const item: string[] = lines[i].split("");
  s.push(item);
}

const dists: number[][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
let res: number = -1;

const dfs = (grid: string[][], i: number, j: number, sum: number): void => {
  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == "X") return;
  if (grid[i][j] === "E") {
    res = res === -1 ? sum : Math.min(res, sum);
    return;
  }
  const t: string = grid[i][j];
  grid[i][j] = "X";
  for (let k: number = 0; k < 4; k++) {
    let x = i + dists[k][0];
    let y = j + dists[k][1];
    if (k == 0 || k == 1) dfs(s, x, y, sum + 1);
    if (k == 2 || k == 3) dfs(s, x, y, sum + 2);
  }
  grid[i][j] = t;
  return;
};

for (let i: number = 0; i < m; i++) {
  for (let j: number = 0; j < n; j++) {
    if (s[i][j] == "S") {
      dfs(s, i, j, 0);
    }
  }
}

console.log(res);
