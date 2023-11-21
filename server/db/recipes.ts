import connection from './connection'
import { Recipes } from '../../models/recipes'

export async function getAllRecipes(db = connection): Promise<Recipes[]> {
  return db('recipes').select('*')
}

export async function getSavedRecipes(auth0Id: string, db = connection) {
  return db('saved_recipes')
    .select(
      'saved_recipes.id',
      'saved_recipes.user_id',
      'saved_recipes.recipe_ids',
      'users.token'
    )
    .join('users', 'saved_recipes.user_id', 'users.id')
    .where('users.token', auth0Id)
    .then((savedRecipes) => {
      if (savedRecipes.length === 0) {
        throw new Error('No saved recipes found for the user')
      }
      console.log(savedRecipes)
      return savedRecipes
    })
    .catch((error) => {
      console.error('Error fetching saved recipes:', error)
      throw new Error('Failed to fetch saved recipes')
    })
}
