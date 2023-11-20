import { Router } from 'express'
import * as db from '../db/recipes.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'

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

router.get('/saved-recipes', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  try {
    const savedRecipes = await db.getSavedRecipes(auth0Id)
    res.json({ savedRecipes })
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

export default router
