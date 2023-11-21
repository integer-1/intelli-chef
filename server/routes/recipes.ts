import { Router } from 'express'
import * as db from '../db/recipes.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const recipes = await db.getAllRecipes()
    res.json({ recipes })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Cannot get recipes' })
  }
})

export default router
