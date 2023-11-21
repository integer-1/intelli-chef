import connection from './connection'
import { Recipes } from '../../models/recipes'

export async function getAllRecipes(db = connection): Promise<Recipes[]> {
  return db('recipes').select('*')
}
