import request from 'superagent'
import { Recipes } from '../../models/recipes'

const rootUrl = '/api/v1'

export async function getRecipes() {
  const res = await request.get(rootUrl + `/recipes`)
  return res.body.recipes as Recipes[]
}

export async function getRecipeById(id: number) {
  const res = await request.get(rootUrl + `/recipes/${id}`)
  return res.body.recipe
}

export async function updateRecipe({
  id,
  recipe,
}: {
  id: number
  recipe: Recipes
}): Promise<void> {
  await request.patch(rootUrl + `/recipes/${id}`).send(recipe)
}

export async function deleteRecipe(id: number): Promise<void> {
  await request.delete(rootUrl + `/recipes/${id}`)
}

export async function addRecipe(newRecipe: Recipes): Promise<void> {
  await request.post(rootUrl + '/recipes').send({ ...newRecipe })
}
