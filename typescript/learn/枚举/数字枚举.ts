#!/usr/bin/env bun

enum Direction {
  UpX = 1,
  DownX,
  LeftX,
  RightX
}

console.log(`Up: ${Direction.UpX} Down: ${Direction.DownX} Left: ${Direction.LeftX} Right: ${Direction.RightX}`);

enum Answer {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Answer): void {

}

respond('Wa, Wa, Wa', Answer.Yes);