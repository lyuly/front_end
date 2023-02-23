type StringOrNumber = string | number

let sample: StringOrNumber
sample = 'hello'
sample = 7

// error
// sample = true

type Text1 = string | { text: string}

let sample1: Text1
sample1 = 'noo'
sample1 = {text: 'u'}

type Coordinates = [number, number]

type Callback = (data: string) => void