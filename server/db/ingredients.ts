import connection from './connection'
import { Ingredient, IngredientData } from '../../models/ingredients'

export async function getAllIngredients(
  db = connection
): Promise<Ingredient[]> {
  return db('ingredients').select()
}

export async function getIngredientById(
  id: number,
  db = connection
): Promise<Ingredient> {
  return db('ingredients').where({ id }).select().first()
}

export async function updateIngredient(
  id: number,
  updatedData: IngredientData,
  db = connection
): Promise<Ingredient[]> {
  return db('ingredients')
    .where({ id })
    .update({ ...updatedData })
    .returning(['id', 'item_name'])
}

export async function deleteIngredient(
  id: number,
  db = connection
): Promise<void> {
  await db('ingredients').where({ id }).delete()
}

export async function addIngredient(
  ingredient: IngredientData,
  db = connection
): Promise<Ingredient> {
  return db('ingredients')
    .insert({ ...ingredient })
    .returning(['id', 'item_name'])
}
