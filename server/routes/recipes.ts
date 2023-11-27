import { Router } from 'express'
import * as db from '../db/recipes.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const recipes = await db.getAllRecipes()
    res.json({ recipes })
  } catch (error) {
    res.status(500).json({ message: 'Cannot get recipes' })
  }
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const recipe = await db.getRecipesByID(id)
    res.json({ recipe })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updatedData = req.body
    const updatedRecipe = await db.updateRecipe(id, updatedData)
    res.json(updatedRecipe[0])
  } catch (error) {
    res.status(500).json({ message: 'Cannot get update' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    db.deleteRecipe(id)
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send('Could not delete recipe')
  }
})

router.post('/', async (req, res) => {
  const { ...newRecipe } = req.body
  try {
    const recipe = await db.addRecipe(newRecipe)
    res.status(200).json({ recipe })
  } catch (err) {
    res.status(500).send('Could not add new recipe')
  }
})
export default router
