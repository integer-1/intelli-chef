export interface Recipes {
  id: number
  dish_name: string
  preparation_time: string
  cooking_time: string
  servings: number
  ingredients: string
  method: string
  auth0_id: string
}

export interface RecipeData {
  dish_name: string
  preparation_time: string
  cooking_time: string
  servings: number
  ingredients: string
  method: string
  auth0_id: string
}
