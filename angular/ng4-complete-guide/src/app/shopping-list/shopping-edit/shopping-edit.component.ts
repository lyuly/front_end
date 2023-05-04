import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  name = '';
  amount: number | null = null;

  add() {
    this.addShopping.emit({ name: this.name, amount: this.amount as number });
  }

  deleteShop() {}

  clear() {
    this.name = '';
    this.amount = null;
  }

  @Output() addShopping = new EventEmitter<{ name: string; amount: number }>();
}
