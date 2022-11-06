#!/usr/bin/env ts-node

function bestCoordinate(towers: number[][], radius: number): number[] {
    let ans: number = 0,
        maxAns = 0,
        res: number[] = [0, 0]
    
    towers.sort((a, b) => a[0] - b[0])

    for (let i: number = 0; i <= 50; i++) {
        for (let j: number = 0; j <= 50; j++) {
            ans = 0
            for (const [x, y, q] of towers) {
                const d: number = Math.sqrt((x - i) ** 2 + (y - j) ** 2)
                if (d <= radius) {
                    ans += Math.floor(q / (1 + d))
                }
            }
            // console.log(`${i}, ${j}), ${ans}`)
            if (ans > maxAns) {
                maxAns = ans
                res = []
                res.push(i, j)
            }
        }
    }
    return res
}

const towers = [[40,41,12],[18,5,2]], radius = 35
console.log(bestCoordinate(towers, radius))
