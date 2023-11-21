import request from 'superagent'
import { Recipes } from '../../models/recipes'
import { User } from '../../models/users'

const rootUrl = '/api/v1'

export async function getRecipes() {
  const res = await request.get(rootUrl + `/recipes`)
  return res.body.recipes as Recipes[]
}

// export async function getAllSavedRecipes(): Promise<SavedRecipes[]> {
//   const res = await request.get(rootUrl + `/recipes/saved-recipes/`)
//   return res.body
// }

// export async function getSavedRecipes({
//   user_id,
// }: {
//   user_id: number
// }): Promise<SavedRecipes[]> {
//   const res = await request.get(rootUrl + `/recipes/saved-recipes/${user_id}`)

//   return res.body
// }
