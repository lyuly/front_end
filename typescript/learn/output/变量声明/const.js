#!/usr/bin/env bun
"use strict";
const numLivesForCat = 9;
const kitty = {
    name: 'Aurora',
    numLives: numLivesForCat,
};
// kitty = {
//   name: 'Danielle',
//   numLives: numLivesForCat
// };
// error
kitty.name = 'Rory';
kitty.name = 'kitty';
kitty.name = 'Cat';
kitty.numLives--;
