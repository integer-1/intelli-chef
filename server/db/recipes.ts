import connection from './connection'
import { Recipes } from '../../models/recipes'

export async function getAllRecipes(db = connection): Promise<Recipes[]> {
  return db('recipes').select('*')
}

export async function getSavedRecipes(auth0Id: string, db = connection) {
  return db('saved_recipes')
    .select('id', 'user_id', 'ingredient_ids')
    .where('user_id', auth0Id)
    .then((recipes) => {
      if (recipes.length === 0) {
        throw new Error('No saved recipes found for the user')
      }
      return recipes
    })
    .catch((error) => {
      console.error('Error fetching saved recipes:', error)
      throw new Error('Failed to fetch saved recipes')
    })
}
