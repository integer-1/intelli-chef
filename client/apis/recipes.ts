import request from 'superagent'
import { Recipes } from '../../models/recipes'

const rootUrl = '/api/v1'

export async function getRecipes() {
  const res = await request.get(rootUrl + `/recipes`)
  return res.body.recipes as Recipes[]
}
