export default function(length:number):number[] {
  let a:number[] = []
  for (let i:number = 0; i < length; i++)
    a.push(Math.floor(Math.random() * length))
  return a
}