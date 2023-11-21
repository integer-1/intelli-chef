import request from 'superagent'
import { Recipes, SavedRecipes } from '../../models/recipes'
import { User } from '../../models/users'

const rootUrl = '/api/v1'

export async function getRecipes() {
  const res = await request.get(rootUrl + `/recipes`)
  return res.body.recipes as Recipes[]
}

export async function getSavedRecipes({
  token,
}: {
  token: string
}): Promise<SavedRecipes[]> {
  const res = await request
    .get(rootUrl + `/recipes/saved-recipes`)
    .set('Authorization', `Bearer ${token}`)
console.log(token)
    console.log(res.body.savedRecipes)
  return res.body.savedRecipes
}
