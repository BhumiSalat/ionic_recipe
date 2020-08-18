import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
 private recipes: Recipe[] =[
    {
      id:'r1',
      title:'Fruit',
      imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/fruits.png ',
      ingredints: ['Bowl', 'Nife','chaat masala']
    },
    {
      id:'r2',
      title:'Maggi',
      imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/pool.png ',
      ingredints: ['Maggi', 'water','maggi masala']
    },
    {
      id:'r3',
      title:'Cheese cake',
      imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/tulips.png ',
      ingredints: ['Milk', 'Cheese','Biscuits']
    },
    {
      id:'r4',
      title:'Pizza',
      imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/peppers.png ',
      ingredints: ['Pizza', 'souce','toppings']
    }

  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe =>{
        return recipe.id === recipeId;
      }),
    };
  }
}
