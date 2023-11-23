import { Router } from 'express'
import * as db from '../db/ingredients.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const ingredients = await db.getAllIngredients()
    res.json({ ingredients })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get ingredients' })
  }
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const ingredient = await db.getIngredientById(id)
    res.json({ ingredient })
  } catch (error) {
    res.status(500).json({ message: 'Cannot get ingredient' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updatedData = req.body
    const updatedIngredient = await db.updateIngredient(id, updatedData)
    res.json(updatedIngredient[0])
  } catch (error) {
    res.status(500).json({ message: 'Cannot get update' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    db.deleteIngredient(id)
    res.sendStatus(200)
  } catch (err) {
    res.status(500).send('Could not delete ingredient')
  }
})

router.post('/', async (req, res) => {
  const { ...newIngredient } = req.body
  try {
    const ingredient = await db.addIngredient(newIngredient)
    res.status(200).json({ ingredient })
  } catch (err) {
    res.status(500).send('Could not add new ingredient')
  }
})

export default router
