import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('recipeId')){
        this.router.navigate(['recipes']);
        return;
      }
      const recipeId = paraMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);

      if(!this.loadedRecipe.id){
        this.router.navigate(['recipes']);
      }
    });
  }

  onDeleteClick(){
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['recipes']);
  }
}
