/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from '../Authenticated.tsx'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import RecipeViewer from '../ViewRecipe/RecipeViewer'
import SideBar from '../SideBar/SideBar'
import Header from '../Header/Header'
import { useRecipe } from '../../hooks/useRecipe.ts'
import styles from './RecipeGenerator.module.css'
import { RecipeData } from '../../../models/recipes.ts'

const RecipeCard = () => {
  const { user } = useAuth0()
  const { state } = useLocation()
  const { recipeList, selectedRecipe } = state
  const navigate = useNavigate()
  const { addRecipeMutation } = useRecipe()

  const auth0Id = user?.sub

  const newRecipe: RecipeData = {
    dish_name: selectedRecipe.dish_name,
    preparation_time: selectedRecipe.preparation_time,
    cooking_time: selectedRecipe.cooking_time,
    servings: selectedRecipe.servings,
    ingredients: selectedRecipe.ingredients,
    method: selectedRecipe.method,
    auth0_id: auth0Id || '',
  }

  const handleSave = () => {
    addRecipeMutation.mutate(newRecipe, {
      onSuccess: () => {
        navigate('/')
        window.location.reload()
      },
    })
  }

  return (
    <div>
      <Header />
      <SideBar />
      <h1>Recipe for {user?.nickname}</h1>
      <IfAuthenticated>
        <button className={styles['button']} onClick={() => handleSave()}>
          Save
        </button>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <p>You can save this recipe after login </p>
      </IfNotAuthenticated>
      <Link to={`/`} state={recipeList}>
        <button>Home</button>
      </Link>
      <RecipeViewer recipe={selectedRecipe} />
    </div>
  )
}

export default RecipeCard
