var allPathsSourceTarget = function (graph) {
  let stack = [],
    ans = [];

  const dfs = (graph, x, n) => {
    // 节点遍历完了
    if (x === n) {
      ans.push(stack.slice());
      return;
    }
    // 遍历当前节点的邻接节点
    for (const y of graph[x]) {
      stack.push(y);
      dfs(graph, y, n);
      stack.pop();
    }
  };
  stack.push(0);
  dfs(graph, 0, graph.length - 1);
  return ans;
};
console.time('first')
const graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));
console.timeEnd('first')
