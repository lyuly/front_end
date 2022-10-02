const fs = require("fs");
const lines = fs
  .readFileSync("695.txt", "utf-8")
  .toString()
  .split(/\r\n|\r|\n/);

const grid = [];

for (const line of lines) {
  grid.push(line.split(",").map(Number));
}

var maxAreaOfIsland = function (grid) {
  if (grid.length === 0) return 0;
  const m = grid.length,
    n = grid[0].length;
  let res = 0;

  const dfs = (grid, i, j) => {
    if (
      i < 0 ||
      i === grid.length ||
      j < 0 ||
      j === grid[0].length ||
      grid[i][j] !== 1
    ) {
      return 0;
    }
    grid[i][j] = 0;
    let area = 1;
    const dists = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0],
    ];
    for (const dist of dists) {
      area += dfs(grid, i + dist[0], j + dist[1]);
    }
    return area;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        let area = dfs(grid, i, j);
        res = Math.max(res, area);
      }
    }
  }
  return res;
};

console.log(maxAreaOfIsland(grid));
