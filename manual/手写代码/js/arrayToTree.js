#!/usr/bin/env bun
let arr = [
  {id: 1, name: '1', pid: 0},
  {id: 2, name: '2', pid: 1},
  {id: 3, name: '3', pid: 1},
  {id: 4, name: '4', pid: 3},
  {id: 5, name: '5', pid: 3},
  {id: 6, name: '6', pid: 2}
 ];

const out = [{"id":1,"name":"1","pid":0,"children":[{"id":2,"name":"2","pid":1,"children":[{"id":6,"name":"6","pid":2,"children":[]}]},{"id":3,"name":"3","pid":1,"children":[{"id":4,"name":"4","pid":3,"children":[]},{"id":5,"name":"5","pid":3,"children":[]}]}]}];

function arraytoTree(data) {
  let map = {};
  let res = [];

  for (let item of data) {
    const id = item.id;
    const pid = item.pid;

    if (!map[id]) {
      map[id] = {
        children: []
      }
    }

    map[id] = {
      ...item,
      children: map[id]['children']
    }

    const treeItem = map[id];

    if (pid === 0)
      res.push(treeItem);
    else {
      if (!map[pid]) {
        map[pid] = {
          children: []
        }
      }
      map[pid].children.push(treeItem)
    }
  }
  return res;
}

const result = arraytoTree(arr);
console.log(JSON.stringify(result) === JSON.stringify(out));