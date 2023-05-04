import { Component } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('polpettle di pane', 'milk cheese and egg', 'https://qph.cf2.quoracdn.net/main-qimg-970dcc9152d968838fbaedb0d8a93187-pjlq'),
    new Recipe('cake', 'Delicious cake with pistachio and raspberries', 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80')
  ];
}
