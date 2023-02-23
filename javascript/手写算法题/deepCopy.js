function judgeObj(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && obj
}

function deepCopy(obj, hash = new WeakMap()) {
  if (obj.constructor === Date) {
    return new Date(obj)
  }

  if (obj.constructor === RegExp) {
    return new RegExp(obj)
  }

  if (hash.has(obj)) {
    return hash.get(obj)
  }

  let allDesc = Object.getOwnPropertyDescriptors(obj)
  let newObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  hash.set(obj, newObj)
  for (const key of Reflect.ownKeys(obj)) {
    newObj[key] = judgeObj(obj[key]) && typeof obj[key] !== 'function' ? deepCopy(obj[key], hash) : obj[key]
  }
  return newObj
}