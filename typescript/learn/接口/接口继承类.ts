#!/usr/bin/env bun

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select(): void {}
}

class TextBox extends Control {
  select() {}
}

class Image implements SelectableControl {
  select(): void {}
}

class Location {
  
}