import request from 'superagent'
import type { Ingredient, IngredientData } from '../../models/ingredients'

const rootUrl = '/api/v1'

export async function getAllIngredients(): Promise<Ingredient[]> {
  const res = await request.get(rootUrl + '/ingredients')
  if (res.status !== 200) {
    throw new Error('Failed to fetch ingredients')
  }
  return res.body.ingredients as Ingredient[]
}

export async function getIngredientById(
  id: number
): Promise<Ingredient | undefined> {
  const res = await request.get(rootUrl + `/ingredients/${id}`)
  if (res.status !== 200) {
    throw new Error(`Failed to fetch ingredient with ID ${id}`)
  }
  return res.body.ingredient
}

export async function updateIngredient({
  id,
  ingredient,
}: {
  id: number
  ingredient: Ingredient
}): Promise<void> {
  await request.patch(rootUrl + `/ingredients/${id}`).send(ingredient)
}

export async function deleteIngredient(id: number): Promise<void> {
  await request.delete(rootUrl + `/ingredients/${id}`)
}

export async function addIngredient(
  newIngredient: IngredientData
): Promise<void> {
  await request.post(rootUrl + '/ingredients').send({ ...newIngredient })
}
