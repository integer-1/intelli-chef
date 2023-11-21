export interface Recipes {
  id: number
  dish_name: string
  preparation_time: string
  cooking_time: string
  servings: number
  ingredients: string
  method: string
}


export interface SavedRecipes {
  id: number;
  user_id: number;
  recipe_ids: number[];
}