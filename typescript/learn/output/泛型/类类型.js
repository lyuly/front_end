#!/usr/bin/env bun
"use strict";
function create(c) {
    return new c();
}
class BeeKeeper {
    hasMask;
}
class ZooKeeper {
    nametag;
}
class Animal {
    numLegs;
}
class Bee extends Animal {
    keeper;
}
class Lion extends Animal {
    keeper;
}
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
