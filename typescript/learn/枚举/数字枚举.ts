#!/usr/bin/env bun

enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(`Up: ${Direction.Up} Down: ${Direction.Down} Left: ${Direction.Left} Right: ${Direction.Right}`);

enum Answer {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Answer): void {

}

respond('Wa, Wa, Wa', Answer.Yes);