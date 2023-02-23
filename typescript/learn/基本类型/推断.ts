function strEnum<T extends string>(o: Array<T>): { [K in T]: K} {
  return o.reduce((res, key) => {
    res[key] = key
    return res
  }, Object.create(null))
}

const Directionx = strEnum(['North', 'South', 'East', 'West'])

type Directionx = keyof typeof Directionx

let example: Directionx

example = Directionx.North
example = 'North'
// example = 'okk' error