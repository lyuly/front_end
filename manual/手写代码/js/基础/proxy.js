const target = {
  name: 'pig'
}

const handler = {
  get(obj, prop) {
    console.log(`正在获取${obj[prop]}`);
  },
  set(obj, prop, value) {
    obj[prop] = value;
    console.log(`更新${obj[prop]}`);
    return value;
  }
}

const proxy = new Proxy(target, handler)

console.log(proxy.name);