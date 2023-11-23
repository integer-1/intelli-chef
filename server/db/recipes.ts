import connection from './connection'
import { RecipeData, Recipes } from '../../models/recipes'

export async function getAllRecipes(db = connection): Promise<Recipes[]> {
  return db('recipes').select('*')
}

export async function getRecipesByID(
  id: number,
  db = connection
): Promise<Recipes[]> {
  return db('recipes').where({ id }).select()
}

export async function updateRecipe(
  id: number,
  updatedData: Recipes,
  db = connection
) {
  return db('recipes')
    .where({ id })
    .update({ ...updatedData })
    .returning([
      'id',
      'dish_name',
      'preparation_time',
      'cooking_time',
      'cooking_time',
      'servings',
      'ingredients',
      'method',
      'auth0_id',
    ])
}

export async function deleteRecipe(id: number, db = connection): Promise<void> {
  await db('recipes').where({ id }).delete()
}

export async function addRecipe(
  recipe: RecipeData,
  db = connection
): Promise<Recipes> {
  return db('recipes')
    .insert({ ...recipe })
    .returning([
      'id',
      'dish_name',
      'preparation_time',
      'cooking_time',
      'cooking_time',
      'servings',
      'ingredients',
      'method',
      'auth0_id',
    ])
}

