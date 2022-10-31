#!/usr/bin/env bun

// 劫持数组的变化
const test = []
const testProxy = new Proxy(test, {
  get(target, key) {
    if (key !== 'length') {
      console.log('get ', target, key)
    }

    return target[key]
  },
  set(target, key, value) {
    if (key !== 'length') {
      console.log('set ', target, key)
    }

    return Reflect.set(target, key, value)
  }
})

testProxy.push(1)
testProxy[0] = 2
testProxy[1] = 'abc'

// 深度遍历对象的每个属性
const obj = {
  name: 'pig',
  salary: {
    job: '10000',
    year: 1
  }
}

// weakMap存储的是对象，加快查找速度
const toProxy = new WeakMap()
const toRaw = new WeakMap()

// 代理配置
const proxyConfig = {
  get(target, key) {
    const res = Reflect.get(target, key);
    if (typeof res === 'object') {
      return reactive(res)
    }

    console.log('get:', target, key)
    return res
  },
  set(target, key, value) {
    console.log('set:', target, key)
    return Reflect.set(target, key, value)
  }
}

const reactive = (target) => {
  const res = toProxy.get(target)

  if (res) {
    return res
  }

  if (toRaw.get(target)) {
    return target
  }

  const observed = new Proxy(target, proxyConfig)
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  return observed
}

const testObjProxy = reactive(obj)
console.log(testObjProxy.salary.job)
testObjProxy.salary.all = 300000